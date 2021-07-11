let environment = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
let SERVER = {};
let DB = {
    MONGO_URL : ''
}
if( environment == 'local' ){
    SERVER = {
        HOST : 'localhost',
        PORT: 8000,
    }
    DB.MONGO_URL = 'mongodb://localhost:27017/personsManagement';
} else if( environment == 'development' ){
    SERVER = {
        HOST : 'localhost',
        PORT: 8000,
    }
    DB.MONGO_URL = 'mongodb://localhost:27017/personsManagement';
} else {
    SERVER = {
        HOST : 'localhost',
        PORT: 8000,
    }
    DB.MONGO_URL = 'mongodb://localhost:27017/personsManagement';
}



const CONSTANT = {
    SERVER ,
    PUBLIC_URL : 'http://' + SERVER.HOST + ':'+ SERVER.PORT + "/public",
    JWT_SECRET : '@!&&4345454&&%*7%F',
    JWT_TOKEN_EXPIRES : 60 * 60,
    DB,
    ROLE : {
        USER : 'user'
    }
}
module.exports = CONSTANT;