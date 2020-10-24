module.exports = (sequelize, DataTypes) => {
  const SubscribedUser = sequelize.define(
    "subscribed_user",
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

  SubscribedUser.sync({ force: true });
  return SubscribedUser;
};
