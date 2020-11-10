const { ProfileUser } = require("../models");

const updateProfileUser = async (req, res) => {
  const { nome, sexo, about, cel } = req.body;
  const {id_registered_user} = req.session.passport.user


  try {
    const updateProfile = await ProfileUser.update(
      {
        sexo,
        about,
        cel,
      },
      {
        where: {
          fk_registered_user: id_registered_user,
        },
      }
    );
    res.status(200).send("deu certo");
  } catch (error) {
    res.send(error.message);
  }
};

const getProfile = async (req, res) => {
  const id = req.session.passport.user.id_registered_user;

  const result = await ProfileUser.findByPk(id);
  console.log(result) 
  res.send(result)
}

module.exports = { updateProfileUser, getProfile };
