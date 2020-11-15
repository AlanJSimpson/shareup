const express = require("express");
const path = require("path");

const AccessController = require("../controllers/AccessController");
const ProfileController = require("../controllers/ProfileUserController");
const UserController = require("../controllers/testes");
const { checkAuthenticated } = require("../middleware/auth");
//const { upload } = require("../middleware/dataFile");

const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("teste"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

const router = express.Router();

router.post("/register", AccessController.saveNewUser);
router.post("/login", AccessController.userLogin);
router.get("/profile/logout", AccessController.userLogout);
router.get("/userinfo", checkAuthenticated, AccessController.userInfo);
router.get(
  "/profile/getprofile",
  checkAuthenticated,
  ProfileController.getProfile
);
router.get(
  "/profile/getregistereduser",
  checkAuthenticated,
  ProfileController.getRegisteredUser
);
router.patch(
  "/profile/edit",
  checkAuthenticated,
  upload.any(),
  ProfileController.updateProfileUser
);
router.get("/", checkAuthenticated, UserController.findAllUsers);
router.get("/images", checkAuthenticated, UserController.picImage);
router.get("/comments", checkAuthenticated, UserController.userComment);
router.get("/event", checkAuthenticated, UserController.events);
router.get("/adress", checkAuthenticated, UserController.adress);
router.get("/eventdone", checkAuthenticated, UserController.eventDone);
router.get("/teste", checkAuthenticated, UserController.testNpN);

module.exports = router;
