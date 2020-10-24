module.exports = (sequelize, DataTypes) => {
  const ProfileUser = sequelize.define(
    "profile_user",
    {
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
      tableName: "profile_users",
    }
  );

  ProfileUser.sync({ force: true });
  return ProfileUser;
};
