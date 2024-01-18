const express = require("express");
const app = express();

const Room = require("./model/Room");

app.use(express.json());

// Connecting database
require("./config/database");

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
  let foundRooms = await Room.find();
  res.send(foundRooms);
});

app.listen(8000, () => {
  console.log("Server is connected!");
});
