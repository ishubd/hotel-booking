const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Connecting database

require("./config/database");

// routes
const room_routes = require("./routes/room");
const booking_routes = require("./routes/booking");
const current_booking_routes = require("./routes/current-booking");
const {
  handleServerError,
  handleResourceNotFound,
} = require("./middleware/error");

const app = express();

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

// Endpoints for room

app.use("/api/data", room_routes);

// Endpoints for booking

app.use("/api/booking", booking_routes);

// Endpoints for current booking

app.use("/api/current-booking", current_booking_routes);

// Handling error

app.use(handleResourceNotFound);
app.use(handleServerError);

app.listen(8000, () => {
  console.log("Server is connected!");
});
