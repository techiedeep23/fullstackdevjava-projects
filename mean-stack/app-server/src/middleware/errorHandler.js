const httpStatus = require('http-status-codes');
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;

  switch (statusCode) {
    case httpStatus.StatusCodes.BAD_REQUEST:
      res.json({
        title: "The server cannot or will not process the request due to something that is perceived to be a client error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case httpStatus.StatusCodes.NOT_FOUND:
      res.json({
        title: "Requested resource is not available",
        message: err.message,
        stackTrace: err.stack,
      });
    case httpStatus.StatusCodes.UNAUTHORIZED:
      res.json({
        title: "Unauthorized , no or invalid credentials",
        message: err.message,
        stackTrace: err.stack,
      });
    case httpStatus.StatusCodes.FORBIDDEN:
      res.json({
        title: "The server understands the request but refuses to authorize it",
        message: err.message,
        stackTrace: err.stack,
      });
    case httpStatus.StatusCodes.INTERNAL_SERVER_ERROR:
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