
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongoose_delete = require('mongoose-delete');

let options = {discriminatorKey: 'role'};
let userSchema = new Schema({
    username : {
        type: String,
        trim: true
    },
    email : {
        type: String,
        trim: true
    },
    mobileNo : {
        type: String,
        trim: true,
    },
    dob: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    createdAt : {
        type : Date,
        default : new Date(),
    }        
});

userSchema.set('toJSON', { getters: true, virtuals: false });
userSchema.plugin(mongoose_delete, {overrideMethods: true, deletedAt : true, deletedBy : true});


let Person = mongoose.model('Person', userSchema);
module.exports = Person; 
