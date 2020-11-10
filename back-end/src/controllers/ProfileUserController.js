const { ProfileUser, RegisteredUser } = require("../models");

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

  try {
    await RegisteredUser.update({
      nome
    },{
      where: {
        id_registered_user
      }
    })
  } catch (error) {
    console.log(error)
  }
};

const getProfile = async (req, res) => {
  const id = req.session.passport.user.id_registered_user;

  const result = await ProfileUser.findByPk(id);
  res.send(result)
};

const getRegisteredUser = async (req, res) => {
  const id = req.session.passport.user.id_registered_user;
  const result = await RegisteredUser.findByPk(id);
  res.send(result)
}

module.exports = { updateProfileUser, getProfile, getRegisteredUser };
