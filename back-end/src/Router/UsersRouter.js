const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/register", UserController.saveNewUser);
router.post("/login", UserController.logInUser);


module.exports = router;
