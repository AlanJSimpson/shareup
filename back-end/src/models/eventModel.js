const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const Image = require('./imageModel');
const Comment = require('./commentsModel');
const SubscribedUser = require("./subscribedUserModel");
const DoneEvent = require("./doneEvents");
const Adress = require("./adressModel");

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

Event.hasOne(Image, { foreignKey: 'id_events' });
Event.hasOne(Adress, { foreignKey: 'id_events' });
Event.hasMany(Comment, { foreignKey: 'id_events' });
Event.hasMany(SubscribedUser, { foreignKey: 'id_events' });
Event.hasMany(DoneEvent, { foreignKey: 'id_events' });




module.exports = Event;