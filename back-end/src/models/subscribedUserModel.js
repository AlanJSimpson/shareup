const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");



const SubscribedUser = connection.define(
    "subscribed_user",
    {
        id_subscribed_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    },
    {
        tableName: 'subscribed_users',
        timestamps: false
    }
);




module.exports = SubscribedUser;