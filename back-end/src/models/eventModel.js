const doneEvent = require("./doneEvent");

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      id_events: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      event_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "events",
    }
  );

  Event.associate = (models) => {
    Event.belongsTo(models.ProfileUser, {
      as: "userEvent",
      foreignKey: "fk_profile_user",
    });
    Event.hasMany(models.Comment, {
      as: "commentEvent",
      foreignKey: "fk_events",
    });
    Event.hasOne(models.Image, {
      as: "eventImage",
      foreignKey: "fk_events",
    });
    Event.hasOne(models.Adress, {
      as: "eventAdress",
      foreignKey: "fk_events",
    });
    Event.hasMany(models.DoneEvent, {
      as: "eventDone",
      foreignKey: "fk_events",
    });
    Event.belongsToMany(models.ProfileUser, {
      as: "subscribed",
      through: models.SubscribedUser,
      foreignKey: "fk_events",
    });
  };

  return Event;
};
