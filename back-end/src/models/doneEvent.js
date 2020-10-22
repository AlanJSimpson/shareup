module.exports = (sequelize, DataTypes) => {

    const DoneEvent = sequelize.define(
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
    DoneEvent.sync({ force: true });
    return DoneEvent
}


