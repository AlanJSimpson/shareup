const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const Comment = require('./commentsModel');
const DoneEvent = require('./doneEvents');
const SubscribedUser = require('./subscribedUserModel');


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
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }

    },
    {
        tableName: 'events'
    }
);

Event.hasMany(Comment);
Event.hasMany(DoneEvent);
Event.hasMany(SubscribedUser);

module.exports = Event;