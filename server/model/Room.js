const { default: mongoose } = require("mongoose");

mongoose;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  booking: [],
});

module.exports = mongoose.model("Book", BookSchema);
