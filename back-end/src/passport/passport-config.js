const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');


function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email)
    if (user == null) {
        console.log('Email não cadastrado')

        //primeiro parametro da função done é de erro:
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

  // usernameField e passwordField são puxados diretamente dos inputs do form de login
  passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, {nome: user.nome, email: user.email, id_registered_user: user.id_registered_user}))
  passport.deserializeUser((user, done) => done(null, getUserById(user.id_registered_user)))
}

module.exports = initialize;