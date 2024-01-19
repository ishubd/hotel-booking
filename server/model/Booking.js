const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookingSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  room_id: {
    type: String,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
