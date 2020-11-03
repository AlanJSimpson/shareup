module.exports = (sequelize, DataTypes) => {
  const ProfileUser = sequelize.define(
    "ProfileUser",
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

  ProfileUser.associate = (models) => {
    ProfileUser.belongsTo(models.RegisteredUser, {
      foreignKey: "fk_registered_user",
      as: "registeredUser",
    });
    ProfileUser.hasOne(models.Image, {
      as: "avatar",
      foreignKey: "fk_profile_user",
    });
    ProfileUser.hasMany(models.Comment, {
      as: "comments",
      foreignKey: "fk_profile_user",
    });
    ProfileUser.hasMany(models.Event, {
      as: "events",
      foreignKey: "fk_profile_user",
    });
    ProfileUser.hasMany(models.DoneEvent, {
      as: "eventDone",
      foreignKey: "fk_profile_user",
    });
    ProfileUser.belongsToMany(models.Event, {
      through: models.SubscribedUser,
      as: "subscribed",
      foreignKey: "fk_profile_user",
    });
  };

  return ProfileUser;
};
