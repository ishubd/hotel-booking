const express = require("express");
const app = express();

const Room = require("./model/Room");
const Booking = require("./model/Booking");

const cors = require("cors");

app.use(express.json());

// Cors for sharing data accross
app.use(
  cors({
    origin: "*",
  })
);

// Connecting database
require("./config/database");

// Endpoints for room

app.post("/api/data", async (req, res) => {
  let { name, description, type, location, price } = req.body;

  let room = await Room.create({
    name,
    description,
    type,
    location,
    price,
  });

  res.send(room);
  console.log(room);
});

app.get("/api/data", async (req, res) => {
  let foundRooms = await Room.find({ status: "active" });

  res.send(foundRooms);
});

// Endpoints for booking

app.post("/api/booking", async (req, res) => {
  let {
    fname,
    address,
    contact,
    gender,
    room,
    checkin,
    checkout,
    price,
    room_id,
  } = req.body;

  let booking = await Booking.create({
    fname,
    address,
    contact,
    gender,
    room,
    checkin,
    checkout,
    price,
    room_id,
  });

  res.send(booking);

  // updating room model after the room is booked

  async function checkStatus() {
    const booking = await Booking.findOne().sort({ _id: -1 });
    const booked_room = booking.room_id;
    const room = await Room.find({ _id: booked_room });

    await Room.findByIdAndUpdate(booked_room, {
      status: "inactive",
    });

    console.log("succesful");
  }

  checkStatus();
});

app.get("/api/booking", async (req, res) => {
  let foundBookings = await Booking.find();
  res.send(foundBookings);
});

app.get("/api/current-booking", async (req, res) => {
  let latestBooking = await Booking.findOne().sort({ _id: -1 });
  res.send(latestBooking);
});

app.listen(8000, () => {
  console.log("Server is connected!");
});
