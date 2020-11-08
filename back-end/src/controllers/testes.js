const {
  sequelize,
  RegisteredUser,
  ProfileUser,
  Image,
  Comment,
  Event,
  Adress,
  DoneEvent,
} = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");

module.exports = {
  saveNewUser: async (req, res) => {
    let { nome, email, registerPassword, confirmPassword } = req.body;
    if (registerPassword === confirmPassword) {
      try {
        let hashPass = await bcrypt.hash(registerPassword, 10);
        await RegisteredUser.create({
          nome,
          email,
          senha: hashPass,
        });

        // res.status(201).send("cadastro efetuado");
        res.redirect("http://localhost:3000/home");
      } catch (error) {
        res.send({ Error: error.message });
      }
    } else {
      res.send("senhas não conferem");
    }
  },

  findAllUsers: async (req, res) => {
    const allUser = await RegisteredUser.findAll({ include: "profileUser" });
    console.log(allUser);
    res.send(allUser);
  },

  testNpN: async (req, res) => {
    const test = await ProfileUser.findAll({
      include: {
        model: Event,
        as: "subscribed",
      },
    });
    res.send(test);
  },

  picImage: async (req, res) => {
    const allImages = await Image.findAll({
      include: ["userImage", "eventImage"],
    });
    res.send(allImages);
  },

  userComment: async (req, res) => {
    const userComment = await Comment.findAll({
      include: ["userComment", "eventComment"],
    });
    res.send(userComment);
  },

  events: async (req, res) => {
    // const event = await Event.findAll();
    console.log("event>>>>", req.session);
    res.send(req.session.passport);
  },

  adress: async (req, res) => {
    const adress = await Adress.findAll({ include: "eventAdress" });
    res.send(adress);
  },

  eventDone: async (req, res) => {
    const eventDone = await DoneEvent.findAll({
      include: ["eventsDone", "userDone"],
    });
    res.send(eventDone);
  },

  /* imageEvent: async (req, res) => {
    const imageEvent = await Image.find;
  }, */
};
