module.exports = (sequelize, DataTypes) => {



    const Comment = sequelize.define(
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
    Comment.sync({ force: true });
    return Comment
}


