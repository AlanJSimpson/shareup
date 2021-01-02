const { ProfileUser, RegisteredUser, Image } = require('../models');
const path = require('path');

const updateProfileUser = async (req, res) => {
  const { nome, sexo, about, cel, avatar } = req.body;
  const { id_registered_user } = req.session.passport.user;

  try {
    await ProfileUser.update(
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
    res.status(200).send('deu certo');
  } catch (error) {
    res.send(error.message);
  }

  try {
    await RegisteredUser.update(
      {
        nome,
      },
      {
        where: {
          id_registered_user,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  try {
    let avatarReplaced = avatar.replace(
      'C:\\fakepath',
      path.join(__dirname, '..', '..', '..', 'front-end', 'public', 'avatars')
    );

    let idProfileUser = await ProfileUser.findOne({
      where: {
        fk_registered_user: id_registered_user,
      },
    });

    let searchAvatar = await Image.findOne({
      where: {
        fk_profile_user: idProfileUser.id_profile_user,
      },
    });

    if (searchAvatar) {
      await Image.update(
        { avatar_user: avatarReplaced },
        {
          where: {
            fk_profile_user: idProfileUser.id_profile_user,
          },
        }
      );
    } else {
      await Image.create({
        avatar_user: avatarReplaced,
        fk_profile_user: idProfileUser.id_profile_user,
        image_event: null,
        fk_events: null,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getProfile = async (req, res) => {
  const id = req.session.passport.user.id_registered_user;
  const result = await ProfileUser.findOne({
    where: { fk_registered_user: id },
    include: 'registeredUser',
  });
  res.send(result);
};

const getRegisteredUser = async (req, res) => {
  const id = req.session.passport.user.id_registered_user;
  const result = await RegisteredUser.findByPk(id);
  res.send(result);
};

module.exports = { updateProfileUser, getProfile, getRegisteredUser };
