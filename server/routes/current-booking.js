const express = require("express");
const index = require("../controller/current-booking");

const router = express.Router();

router.get("", index);

module.exports = router;
