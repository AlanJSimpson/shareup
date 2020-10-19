const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Event = connection.define(
    "event",
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
        }

    },
    {
        tableName: 'events'
    }
);


module.exports = Event;