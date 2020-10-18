const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const Events = require('./eventModel');
const ProfileUser = require('./profileUserModel');

const Adress = connection.define(
  "adress",
  {
    id_adress: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false ,
    tableName: 'adress',
  }
);


Adress.belongsTo(Events);
Adress.belongsTo(ProfileUser);

module.exports = Adress;
