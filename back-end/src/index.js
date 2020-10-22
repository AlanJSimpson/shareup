const express = require("express");
const userRouter = require("./Router/UsersRouter");
const flash = require('express-flash');
const session = require('express-session');
const passport = require("passport");
const initializePassport = require('./passport/passport-config');
const User = require('./models/registeredUserModel');
const db = require('./models/index');



initializePassport(
  passport,
  async email => await User.findOne({ where: { email: email } }),
  async id => await User.findByPk({ where: { id_registered_user: id } })
)


db.testConnection();


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());



app.use("/user", userRouter);


app.listen(3001);
