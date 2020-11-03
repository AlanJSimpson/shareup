module.exports = (sequelize, DataTypes) => {
  const SubscribedUser = sequelize.define(
    "SubscribedUser",
    {
      id_subscribed_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },

    {
      tableName: "subscribed_users",
      timestamps: false,
    }
  );

  return SubscribedUser;
};
