const express = require('express');
const userRouter = require('./Router/UsersRouter');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./passport/passport-config');
const db = require('./models/index');
const { RegisteredUser } = require('./models');
const cors = require('cors');

initializePassport(
  passport,
  async (email) => await RegisteredUser.findOne({ where: { email } }),
  async (id) => await RegisteredUser.findByPk(id)
);

db.testConnection();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//permite exibir mensagens enviadas pelo passport
app.use(flash());

app.use(
  session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (_req, res) => res.redirect('localhost:3000/user/login'));
app.use('/user', userRouter);

app.listen(3001);
