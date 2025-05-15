const mongoose = require("mongoose");
const config = require("config")
const dbgr = require('debug')('development:mongoose');

mongoose.connect(`${config.get('MONGODB_URI')}/scatch`)
.then(function(){
    // console.log("connected"); 
    dbgr("connected")
})
.catch(function(err){
    // console.log(err);
    dgbr(err);
})
// terminal
// export DEBUG=development:*
// export DEBUG=

module.exports=mongoose.connection;