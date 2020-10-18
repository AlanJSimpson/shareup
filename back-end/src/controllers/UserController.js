const registered_user = require("../models/registered_user");
const bcrypt = require('bcrypt');


module.exports = {
  saveNewUser: async (req, res) => {
    let { nome, email, registerPassword, confirmPassword } = req.body;
    if (registerPassword === confirmPassword) {
      try {
        let hashPass = await bcrypt.hash(registerPassword, 10)
        await registered_user.create({
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
