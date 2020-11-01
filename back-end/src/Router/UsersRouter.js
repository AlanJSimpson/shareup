const express = require("express");
const router = express.Router();
const UserController = require("../controllers/RegisteredUserController");

router.post("/register", UserController.saveNewUser);
//router.post("/login", UserController.logInUser);
router.get("/", UserController.findAllUsers);
router.get("/images", UserController.picImage);
router.get("/comments", UserController.userComment);
router.get("/events", UserController.events);
router.get("/adress", UserController.adress);
router.get("/eventdone", UserController.eventDone);
router.get("/teste", UserController.testNpN);

module.exports = router;
