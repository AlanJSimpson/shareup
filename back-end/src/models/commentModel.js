module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id_comment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fk_events: {
        type: DataTypes.INTEGER,
      },
      fk_profile_user: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "comments",
      timestamps: false,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.ProfileUser, {
      as: "userComment",
      foreignKey: "fk_profile_user",
    });
    Comment.belongsTo(models.Event, {
      as: "eventComment",
      foreignKey: "fk_events",
    });
  };

  return Comment;
};
