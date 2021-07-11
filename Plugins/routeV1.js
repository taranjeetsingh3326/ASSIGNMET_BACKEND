'use strict';

exports.plugin = {
    name : 'Routes',
    pkg: require('../package.json'),
    register: async function (server, options) {
        server.route(require('../Routes/v1'));
    }
};