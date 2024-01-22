const Booking = require("../model/Booking");

const index = async (req, res, next) => {
  try {
    let latestBooking = await Booking.findOne().sort({ _id: -1 });
    res.send(latestBooking);
  } catch (err) {
    next(err);
  }
};

module.exports = index;
