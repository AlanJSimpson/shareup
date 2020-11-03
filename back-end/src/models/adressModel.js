module.exports = (sequelize, DataTypes) => {
  const Adress = sequelize.define(
    "Adress",
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
    { timestamps: false, tableName: "adress" }
  );

  Adress.associate = (models) => {
    Adress.belongsTo(models.Event, {
      as: "eventAdress",
      foreignKey: "fk_events",
    });
  };

  return Adress;
};
