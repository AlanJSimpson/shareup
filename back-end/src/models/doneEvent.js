module.exports = (sequelize, DataTypes) => {
  const DoneEvent = sequelize.define(
    "DoneEvent",
    {
      id_done_event: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "done_events",
      timestamps: false,
    }
  );

  DoneEvent.associate = (models) => {
    DoneEvent.belongsTo(models.Event, {
      as: "eventsDone",
      foreignKey: "fk_events",
    });
    DoneEvent.belongsTo(models.ProfileUser, {
      as: "userDone",
      foreignKey: "fk_profile_user",
    });
  };

  return DoneEvent;
};
