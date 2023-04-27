const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.BAD_REQUEST:
      res.json({
        title: "The server cannot or will not process the request due to something that is perceived to be a client error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Requested resource is not available",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized , no or invalid credentials",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "The server understands the request but refuses to authorize it",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "The server encountered an unexpected condition that prevented it from fulfilling the request",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error found!");
      break;
  }
};

module.exports = errorHandler;