module.exports = async (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
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
    },
    {
      tableName: 'comments',
      timestamps: false,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.ProfileUser, {
      as: 'userComment',
      foreignKey: 'fk_profile_user',
    });
    Comment.belongsTo(models.Event, {
      as: 'eventComment',
      foreignKey: 'fk_events',
    });
  };

  await Comment.sync();
  return Comment;
};
