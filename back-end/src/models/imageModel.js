module.exports = async (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      id_images: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      avatar_user: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_event: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'images',
      timestamps: false,
    }
  );

  Image.associate = (models) => {
    Image.belongsTo(models.ProfileUser, {
      as: 'userImage',
      foreignKey: 'fk_profile_user',
    });
    Image.belongsTo(models.Event, {
      as: 'eventImage',
      foreignKey: 'fk_events',
    });
  };
  await Image.sync();
  return Image;
};
