const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// see passport.js => JWT strategy
const requireAuth = passport.authenticate('jwt', { session: false });

// see passport.js => local strategy
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ hi: 'there' });
  });
  
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}