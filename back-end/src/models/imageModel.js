module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "image",
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
      tableName: "images",
      timestamps: false,
    }
  );

  Image.sync({ force: true });
  return Image;
};
