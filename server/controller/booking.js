const Room = require("../model/Room");
const Booking = require("../model/Booking");

const create = async (req, res, next) => {
  try {
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

      console.log("Succesfully booked a room");
    }

    checkStatus();
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let foundBookings = await Booking.find();
    res.send(foundBookings);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  index,
};
