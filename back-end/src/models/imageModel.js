const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
import Events from './eventModel';
import ProfileUser from './profileUserModel'


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
            allowNull: false,
        },
        image_event: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: 'images',
        timestamps: false
    }
);


Image.belongsTo(Events);
Image.belongsTo(ProfileUser);

module.exports = Image;