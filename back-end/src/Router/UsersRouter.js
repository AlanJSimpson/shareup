const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/register", UserController.saveNewUser);

module.exports = router;
