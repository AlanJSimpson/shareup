const express = require("express");
const router = express.Router();
const AccessController = require("../controllers/AccessController");
const ProfileController = require("../controllers/ProfileUserController");
const UserController = require("../controllers/testes");

router.post("/register", AccessController.saveNewUser);
router.post("/login", AccessController.userLogin);
router.get("/userinfo", AccessController.userInfo);
router.get("/profile/getprofile", ProfileController.getProfile);
router.patch("/profile/edit", ProfileController.updateProfileUser);
router.get("/", UserController.findAllUsers);
router.get("/images", UserController.picImage);
router.get("/comments", UserController.userComment);
router.get("/event", UserController.events);
router.get("/adress", UserController.adress);
router.get("/eventdone", UserController.eventDone);
router.get("/teste", UserController.testNpN);

module.exports = router;
