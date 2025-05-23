const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your_database_name');

const userSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
});

module.exports = mongoose.model('User', userSchema);