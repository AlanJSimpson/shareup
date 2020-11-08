const { RegisteredUser, ProfileUser } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");

const userLogin = passport.authenticate("local", {
  successRedirect: "http://localhost:3000/home",
  failureRedirect: "http://localhost:3000/user/register",
  failureFlash: true,
});

const userInfo = (req, res) => {
  const nome = req.session;
  res.send(nome);
};

const saveNewUser = async (req, res) => {
  let { nome, email, registerPassword, confirmPassword } = req.body;
  if (registerPassword === confirmPassword) {
    try {
      let hashPass = await bcrypt.hash(registerPassword, 10);
      const id = await RegisteredUser.create({
        nome,
        email,
        senha: hashPass,
      });
      await ProfileUser.create({
        sexo: null,
        cel: null,
        about: null,
        fk_registered_user: id.id_registered_user,
      });

      res.status(201).redirect("http://localhost:3000/user/login");
    } catch (error) {
      res.send({ Error: error.message });
    }
  } else {
    res.send("senhas não conferem");
  }
};

module.exports = { userLogin, saveNewUser, userInfo };
