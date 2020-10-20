const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Image = connection.define(
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
        }
    },
    {
        tableName: 'images',
        timestamps: false
    }
);



module.exports = Image;