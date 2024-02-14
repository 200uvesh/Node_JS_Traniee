const mongoose = require("mongoose")

 const registrationDetails = new mongoose.Schema( {
    username:{
        type: String , 
        required: true,
        unique:true
    } , 

    email:{
        type:String,  
        required:true , 
        unique:true

    } , 
    password:{
        type:String,
        required:true 
    }, 
    
 }, {timestamps:true} )
 
const registration = mongoose.model('register', registrationDetails)
module.exports = registration


