const express = require("express");
const router = express.Router();
const UserController = require("../controllers/RegisteredUserController");

router.post("/register", UserController.saveNewUser);
router.post("/login", UserController.logInUser);

module.exports = router;
