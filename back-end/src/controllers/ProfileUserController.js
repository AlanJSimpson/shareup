const { ProfileUser } = require("../models");

const updateProfileUser = async (req, res) => {
  const { nome, sexo, about, cel } = req.body;
  console.log(req.header);

  try {
    const updateProfile = await ProfileUser.update(
      {
        sexo,
        about,
        cel,
      },
      {
        where: {
          fk_registered_user: 21,
        },
      }
    );
    res.status(200).send("deu certo");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { updateProfileUser };
