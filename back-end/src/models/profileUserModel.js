const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const Adress = require('./adressModel');
const Image = require('./imageModel');
const Event = require('./eventModel');
const Comment = require('./commentsModel')
const SubscribedUser = require("./subscribedUserModel");
const DoneEvent = require("./doneEvents");

const ProfileUser = connection.define("profile_user", {
  id_profile_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sexo: {
    type: DataTypes.ENUM("Masculino", "Feminino", "Não Binário"),
    allowNull: false,
  },
  cel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

},
  {
    timestamps: false,
    tableName: 'profile_users',
  }
);

ProfileUser.hasOne(Image, { foreignKey: 'fk_profile_user' });
ProfileUser.hasMany(Comment, { foreignKey: 'fk_profile_user' });
ProfileUser.hasMany(SubscribedUser, { foreignKey: 'fk_profile_user' });
ProfileUser.hasMany(DoneEvent, { foreignKey: 'fk_profile_user' });
ProfileUser.hasMany(Adress, { foreignKey: 'fk_profile_user' });
ProfileUser.hasMany(Event, { foreignKey: 'fk_profile_user' });


module.exports = ProfileUser;
