const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');

const {
  Adress,
  Comment,
  DoneEvent,
  Event,
  Image,
  ProfileUser,
  RegisteredUser,
} = db.sequelize.models;

const userLogin = passport.authenticate('local', {
  successRedirect: 'http://localhost:3000/home',
  failureRedirect: 'http://localhost:3000/user/register',
  failureFlash: true,
});

const userLogout = (req, res) => {
  try {
    req.session.destroy(function (err) {});
  } catch (error) {
    console.log(error);
  }
};

const userInfo = (req, res) => {
  const user = req.session;
  res.send(user);
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
      const idProfileUser = await ProfileUser.create({
        sexo: null,
        cel: null,
        about: null,
        fk_registered_user: id.id_registered_user,
      });

      await Image.create({
        avatar_user: null,
        image_event: null,
        fk_profile_user: idProfileUser.dataValues.id_profile_user,
        fk_events: null,
      });

      res.status(201).redirect('http://localhost:3000/user/login');
    } catch (error) {
      res.send({ error: error.message });
    }
  } else {
    res.send('senhas não conferem');
  }
};

module.exports = { userLogin, saveNewUser, userInfo, userLogout };
