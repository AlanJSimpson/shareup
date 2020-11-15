const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("not authorized");
};

module.exports = { checkAuthenticated };
