module.exports = async (sequelize, DataTypes) => {
  const RegisteredUser = sequelize.define(
    'RegisteredUser',
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
      tableName: 'registered_users',
    }
  );

  RegisteredUser.associate = (models) => {
    RegisteredUser.hasOne(models.ProfileUser, {
      as: 'profileUser',
      foreignKey: 'fk_registered_user',
    });
  };
  await RegisteredUser;
  return RegisteredUser;
};
