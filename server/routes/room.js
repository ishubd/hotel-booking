const express = require("express");
const { create, index } = require("../controller/room");

const router = express.Router();

router.post("", create);

router.get("", index);

module.exports = router;
