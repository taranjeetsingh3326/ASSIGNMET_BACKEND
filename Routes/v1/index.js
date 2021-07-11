var glob = require("glob")
var routes = [];
let files = glob.sync("Routes/**/*.js",{
    ignore : 'Routes/v1/index.js'
})
files.forEach(function (file){
    routes = routes.concat(require('../../'+file));
})

module.exports = routes;