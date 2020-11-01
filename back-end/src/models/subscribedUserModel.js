module.exports = (sequelize, DataTypes) => {
  const SubscribedUser = sequelize.define(
    "SubscribedUser",
    {
      id_subscribed_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      fk_profile_user: {
        type: DataTypes.INTEGER,
      },

      fk_events: {
        type: DataTypes.INTEGER,
      },
    },

    {
      tableName: "subscribed_users",
      timestamps: false,
    }
  );

  return SubscribedUser;
};
