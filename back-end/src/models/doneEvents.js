const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");



const DoneEvent = connection.define(
    "done_event",
    {
        id_done_event: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        done: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'done_events',
        timestamps: false
    }
);




module.exports = DoneEvent;