'use strict';
const CONSTANT = require('../Config/constant');

const Joi = require('joi');
exports.plugin = {
    name: 'jwt-auth',
    pkg: require('../package.json'),
    register: async function (server, options) {
        server.auth.strategy('jwt', 'jwt',
            { key: CONSTANT.JWT_SECRET,   // Never Share your secret key
                validate: async(decoded, request) => {                   
                    if (!true) {
                        return { isValid: false };
                    }
                    else {
                    return { isValid: true };
                    }
                },           
                // validate function defined above
                verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
            });        
        server.auth.default('jwt');
    }
};