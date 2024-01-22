const express = require("express");
const { create, index } = require("../controller/booking");

const router = express.Router();

router.post("", create);

router.get("", index);

module.exports = router;
