const mongoose = require("mongoose")
 

// First Step
 const registrationDetails = new mongoose.Schema( {
    username:{
        type: String , 
        required: true,
    } , 

    email:{
        type:String,  
        required:true

    } , 
    password:{
        type:String,
        required:true
    }, 
    
 }, {Timestamp:true} )
 
const registration = mongoose.model('register', registrationDetails)
module.exports = registration


