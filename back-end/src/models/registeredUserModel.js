module.exports = (sequelize, DataTypes) => {


  const RegisteredUser = sequelize.define(
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
    {
      timestamps: false,
      tableName: "registered_users"
    }
  );
  
  RegisteredUser.sync({ force: true });
  return RegisteredUser
}


