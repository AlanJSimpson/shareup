const UserModel = require("../models/UserModel");

module.exports = {
  saveNewUser: async (req, res) => {
    let { nome, email, registerPassword, confirmPassword } = req.body;
    if (registerPassword === confirmPassword) {
      try {
        await UserModel.create({
          nome,
          email,
          senha: registerPassword,
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
