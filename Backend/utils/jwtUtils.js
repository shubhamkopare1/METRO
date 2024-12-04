const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ uuid: userId }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token valid for 1 hour
  });
};

module.exports = { generateToken };
