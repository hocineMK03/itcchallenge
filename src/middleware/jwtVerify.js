const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    if (!authHeader) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        error.status = 'fail';
        return next(error);
    } else {
        const token = authHeader.split(' ');
        console.log(token)
        if (!token) {

            const error = new Error('No token provided');
            error.statusCode = 401;
            error.status = 'fail';
            return next(error);
        }
        console.log("please")

        jwt.verify(token[0], process.env.ACCESS_JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err)
                const error = new Error('Failed to authenticate token');
                error.statusCode = 403;
                error.status = 'fail';
                return next(error);
            } else {
                req.user = decoded;
                next();
            }
        });
    }
};

module.exports = verifyToken;
