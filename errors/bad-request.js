const { StatusCodes } = require("http-status-codes");
const CustomApiError = require("./custom-api");

class BadReqestError extends CustomApiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadReqestError