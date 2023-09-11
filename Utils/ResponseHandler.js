exports.sendSuccessResponse = (res, statusCode, Successmessage) => {
   return res.status(statusCode).send(success, message).end();

  };
  
  exports.sendErrorResponse = (res, statusCode, errorMessage) => {
    return res.status(statusCode).send(errorMessage).end();
  };
  