const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");

// const createCustomError = (message, statusCode) => {
//   return new CustomAPIError(message, statusCode);
// };
const createBadRequestError = (message) => {
  return new BadRequestError(message);
};
const createUnauthError = (message) => {
  return new UnauthenticatedError(message);
};

module.exports = {
  CustomAPIError,
  createBadRequestError,
  createUnauthError,
};
