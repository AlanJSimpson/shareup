const { DataTypes } = require("sequelize");

const { connection } = require("../database/connection");
const RegisteredUser = require("../models/registeredUserModel");

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
});

ProfileUser.belongsTo(RegisteredUser);

module.exports = ProfileUser;
