const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');


function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email)
    if (user == null) {
        console.log('Email não cadastrado')
      return done(null, false, { message: 'Email não cadastrado' })
    }

    try {
      if (await bcrypt.compare(password, user.senha)) {
        console.log('logado')
        return done(null, user)
      } else {
        console.log('Senha incorreta')
        return done(null, false, { message: 'Senha incorreta' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id_registered_user))
  passport.deserializeUser((id_registered_user, done) => {
    return done(null, getUserById(id_registered_user))
  })
}

module.exports = initialize;