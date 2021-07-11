'use strict';
require('dotenv').config()
const Hapi = require('hapi');
const Path = require('path');
const Plugins = require('./Plugins'); 
const CONSTANT = require('./Config/constant');

// Start the server
const start =  async function() {
    try {
        // Create a server with a host and port
        const server = Hapi.server({
            host:'localhost',
            port: CONSTANT.SERVER.PORT,
            routes: {
                cors: {
                    origin: ["*"],
                    additionalHeaders: ['Authorization', 'fcmtoken'],
                },
                files: {
                    relativeTo: Path.join(__dirname, 'public')
                }
            },
            debug: {
                log: ['*'],
                request: ['*']
            }
        });
        server.events.on('log', (event, tags) => {
            if (tags.error) {
                console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
            }
        });
        await server.register(Plugins);

        // Add the Default  route
        server.route({
            method:'GET',
            path:'/',
            handler:function(request,h) {
                return {status:false, error: true, message:"You are not authorized to access this property."};
            }
        });
        server.route({
            method: 'GET',
            path: '/{filename}',
            handler: function(request,h) {
                console.log('request.params.filename', request.params.filename)
                return h.file(request.params.filename);
            },
            config : {
                auth: false
            }
        });

        server.ext('onPreResponse', (request, h) => {
            return h.continue;
        });

        await server.start();
        console.log('Server running at: ', server.info.uri);
    }
    catch (err) {
        console.log('Server configuration Error: ', err);
        process.exit(1);
    }    
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

start();