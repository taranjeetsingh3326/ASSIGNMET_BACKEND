const log4js = require('../../../Config/logger');
const logger = log4js.getLogger('users');
logger.level = 'debug';
const PersonController = require('../../../Controllers/v1/user/personController')
let Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/person',
        handler: PersonController.getPersons,
        options: {
            auth : false,
            description: 'Get All Persons',
            notes: 'Returns aworking msg to check',
            tags: ['api', 'Persons'], // ADD THIS TAG
        }        
    },
    {
        method: 'GET',
        path: '/person/{id}',
        handler: PersonController.getPersonById,
        options: {
            auth : false,
            description: 'Get All customers',
            notes: 'Returns aworking msg to check',
            tags: ['api', 'Persons'], // ADD THIS TAG
        }        
    },
    {
        method: 'POST',
        path: '/person',
        handler: PersonController.addPerson,
        options: {
            auth : false,
            validate : {
                payload : {
                    username: Joi.string().required(),
                    email:Joi.string().email().required(),
                    dob: Joi.string(),
                    mobileNo: Joi.string(),
                    country: Joi.string()
                }
            },
            description: 'Add persons',
            notes: 'Returns working msg to check',
            tags: ['api', 'Persons'], // ADD THIS TAG
        }        
    },
    {
        method: 'PUT',
        path: '/person/{id}',
        handler: PersonController.updatePersonById,
        options: {
            auth : false,
            validate : {
                payload : {
                    username: Joi.string().required(),
                    email:Joi.string().email().required(),
                    dob: Joi.string(),
                    mobileNo: Joi.string(),
                    country: Joi.string()
                }
            },
            description: 'Update person By id',
            notes: 'Returns working msg to check',
            tags: ['api', 'Persons'], // ADD THIS TAG
        }        
    }
]