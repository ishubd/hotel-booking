const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

const Room = require("./model/Room");
const Booking = require("./model/Booking");

const cors = require("cors");

app.use(express.json());

// Making upload folder public to access

app.use("/uploads", express.static("uploads"));

// global middleware npm express-fileupload

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

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

  // For uploading image

  let { name, description, type, location, price } = req.body;

  image_name = Date.now() + req.files.images.name;

  await req.files.images.mv(path.join(__dirname, "./uploads/" + image_name));

let images = image_name

  let room = await Room.create({
    name,
    description,
    type,
    location,
    price,
    images
  });

  res.send(room);
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
