const Room = require("../model/Room");
const path = require("path");

const create = async (req, res, next) => {
  try {
    // For uploading image

    let { name, description, type, location, price } = req.body;

    image_name = Date.now() + req.files.images.name;

    await req.files.images.mv(path.join(__dirname, "../uploads/" + image_name));

    let images = image_name;

    let room = await Room.create({
      name,
      description,
      type,
      location,
      price,
      images,
    });

    res.send(room);
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let foundRooms = await Room.find({ status: "active" });

    res.send(foundRooms);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  index,
};
