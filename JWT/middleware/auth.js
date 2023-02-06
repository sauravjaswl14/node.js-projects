const jwt = require("jsonwebtoken");
const { createUnauthError } = require("../errors");

const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createUnauthError("no token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw createUnauthError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
