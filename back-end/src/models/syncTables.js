const Adress = require('./adressModel');
const Event = require('./eventModel');
const Comment = require('./commentsModel');
const DoneEvent = require('./doneEvents');
const SubscribedUser = require('./subscribedUserModel');
const ProfileUser = require('./profileUserModel');
const Image = require('./imageModel')
const RegisteredUser = require('./registeredUserModel')

module.exports = {
    syncTables: async () => {
        try {

            await RegisteredUser.sync({ force: true });
            await ProfileUser.sync({ force: true });
            await Event.sync({ force: true });
            await Image.sync({ force: true });
            await Adress.sync({ force: true });
            await Comment.sync({ force: true });
            await DoneEvent.sync({ force: true });
            await SubscribedUser.sync({ force: true });

        } catch (error) {
            console.log(error)
        }

    }
}