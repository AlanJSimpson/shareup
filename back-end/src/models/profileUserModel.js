const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const RegisteredUser = require("./registeredUserModel");
const Adress = require('./adressModel');
const Event = require('./eventModel');
const Comment = require('./commentsModel');
const DoneEvent = require('./doneEvents');
const SubscribedUser = require('./subscribedUserModel');

const ProfileUser = connection.define("profile_user", {
  id_perfil_user: {
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

ProfileUser.belongsTo(RegisteredUser);
ProfileUser.hasMany(Adress);
ProfileUser.hasMany(Event);
ProfileUser.hasMany(Comment);
ProfileUser.hasMany(DoneEvent);
ProfileUser.hasMany(SubscribedUser);

module.exports = ProfileUser;
