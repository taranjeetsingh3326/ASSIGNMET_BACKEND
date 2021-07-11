const jwt = require('jsonwebtoken');
const CONSTANT = require('../Config/constant');

module.exports = {
    genrateJwtToken : (data) => {
        return new Promise((resolve, reject)=>{
            resolve(
                jwt.sign({
                data: data
              }, CONSTANT.JWT_SECRET, { expiresIn: CONSTANT.JWT_TOKEN_EXPIRES })
            )
        })       
    },
    actionFailHandler : async (request, h, err) => {
        if (process.env.NODE_ENV === 'production') {
            // In prod, log a limited error message and throw the default Bad Request error.
            console.error('ValidationError:', err.message); // Better to use an actual logger here.
            throw Boom.badRequest(`Invalid request payload input`);
        } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
        }
    }
}