const { DataTypes } = require("sequelize");

const { connection } = require("../database/connection");

const registered_user = connection.define(
  "registered_user",
  {
    id_registered_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false ,
    tableName: 'registered_users',
  }
);

module.exports = registered_user;
