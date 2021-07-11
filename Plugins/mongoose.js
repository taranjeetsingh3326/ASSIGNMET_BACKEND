'use strict';
const mongoose = require('mongoose');
const Boom =require('boom');
const CONSTANT = require('../Config/constant')
exports.plugin = {
    name : 'Mongoose',
    pkg: require('../package.json'),
    register: async function (server, options) {
        try{
            await mongoose.connect(CONSTANT.DB.MONGO_URL, {useNewUrlParser: true});
            console.log('***Mongoose connected****');
        } catch(err){
            console.log('***Mongoose Connection Error***', err);
            throw Boom.boomify(new Error('Mongoose not connected'), 401)
        }        
    }
};