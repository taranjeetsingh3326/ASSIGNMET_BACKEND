const log4js = require('../../../Config/logger');
const logger = log4js.getLogger('users');
logger.level = 'debug';
const Person = require('../../../Models/Person')
const Boom = require('boom');


module.exports.getPersons = async (request, h)=>{
    let response = await Person.find().lean();
    response = response.map( res =>{
        res.id = res._id;
        return res
    })
    return { statusCode : 200, message : 'Success', data : response };
    
}

module.exports.getPersonById = async (request, h)=>{
    let id = request.params.id;
    let response = await Person.findOne({_id: id}).lean();
    response.id = response._id 
    return { statusCode : 200, message : 'Success', data : response };
    
}

module.exports.updatePersonById = async (request, h)=>{
    let id = request.params.id;
    let payload = request.payload;
    let response = await Person.findOne({_id: id});
    response.username = payload.username;
    response.dob = payload.dob;
    response.email = payload.email;
    response.mobileNo = payload.mobileNo;
    response.country = payload.country;
    await response.save();
    return { statusCode : 200, message : 'Updated Successfully', data : [] };
    
}

module.exports.addPerson = async (request, h)=>{
    let payload = request.payload;
    let isExist = await Person.findOne({email: payload.email.trim()});
    if(isExist){
        throw new Error("This Email id already exist");
    }
    let response = await new Person(payload);
    await response.save();
    return { statusCode : 200, message : 'Created Successfully', data : [] };
    
}

