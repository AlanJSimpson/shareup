const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");



const Comment = connection.define(
    "comment",
    {
        id_comment: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: 'comments',
        timestamps: false
    }
);



module.exports = Comment;