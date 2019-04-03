const jwt = require("jsonwebtoken");

const secret = require("../auth/shhSecrets.js").jswSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid creditials" });
      } else {
        //req.decodedJwt = decodedToken; -> Stretch
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Error: no token with login" });
  }
};
