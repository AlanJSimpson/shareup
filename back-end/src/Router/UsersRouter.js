const express = require("express");
const router = express.Router();
const AccessController = require("../controllers/AccessController");
const ProfileController = require("../controllers/ProfileUserController");
const UserController = require("../controllers/testes");

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.send('not authorized')
}

router.post("/register", AccessController.saveNewUser);
router.post("/login", AccessController.userLogin);
router.get("/userinfo", checkAuthenticated, AccessController.userInfo);
router.get("/profile/getprofile", checkAuthenticated, ProfileController.getProfile);
router.get("/profile/getregistereduser", checkAuthenticated, ProfileController.getRegisteredUser);
router.patch("/profile/edit", checkAuthenticated, ProfileController.updateProfileUser);
router.get("/", checkAuthenticated, UserController.findAllUsers);
router.get("/images", checkAuthenticated, UserController.picImage);
router.get("/comments", checkAuthenticated, UserController.userComment);
router.get("/event", checkAuthenticated, UserController.events);
router.get("/adress", checkAuthenticated, UserController.adress);
router.get("/eventdone", checkAuthenticated, UserController.eventDone);
router.get("/teste", checkAuthenticated, UserController.testNpN);

module.exports = router;
