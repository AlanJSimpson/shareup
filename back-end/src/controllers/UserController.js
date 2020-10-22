const RegisteredUser = require("../models/registeredUserModel");
const bcrypt = require("bcrypt");
const passport = require('passport');


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
        res.redirect('http://localhost:3000/home')
      } catch (error) {
        res.send({ Error: error.message });
      }
    } else {
      res.send("senhas não conferem");
    }
  },
  logInUser: passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/home',
    failureRedirect: '/users/register',
    failureFlash: true
    
  })
};
