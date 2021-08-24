const multer = require('multer');
const { sendErrorResponse, sendWrongInputResponse } = require('./response');

/**
 * 
 * @param {Error} error 
 * @param {req} req 
 * @param {res} res 
 * @param {Function} next 
 * @returns 
 */
const errorHandler = (error, req, res, next) => {
    try {
        if (error && error.error && error.error.isJoi) {
            return sendWrongInputResponse(req, res, error.error.toString(), error);
        }
        if ((error instanceof multer.MulterError)) {
            return sendErrorResponse(req, res, 409, error.toString(), error);
        }
    } catch (err) {
        error = err;
    }
    sendErrorResponse(req, res, 500, `Something went wrong`, error);
    req.log.info({ error });
}

/**
 * 
 * @param {req} req 
 * @param {res} res 
 * @param {Function} next 
 * @returns 
 */
const path404Handler = (req, res, next) => sendErrorResponse(req, res, 404, `Path Not found - ${req.url}`, new Error('Not Found'))

module.exports = {
    errorHandler,
    path404Handler
}