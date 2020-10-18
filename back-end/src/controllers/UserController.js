const RegisteredUser = require("../models/registeredUserModel");
const bcrypt = require("bcrypt");

module.exports = {
  saveNewUser: async (req, res) => {
    let { nome, email, registerPassword, confirmPassword } = req.body;
    if (registerPassword === confirmPassword) {
      let hashPass = await bcrypt.hash(registerPassword, 10);
      try {
        await RegisteredUser.create({
          nome,
          email,
          senha: hashPass,
        });

        res.status(201).send("cadastro efetuado");
      } catch (error) {
        res.send({ Error: error.message });
      }
    } else {
      res.send("senhas não conferem");
    }
  },
};
