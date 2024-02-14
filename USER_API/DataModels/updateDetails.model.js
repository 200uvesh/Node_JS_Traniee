const mongoose = require("mongoose")
const updateDetails = mongoose.Schema({
    _id:{
             type:String
    } , 
    username:{
        type : String

    } , 
    email:{
        type : String

    } , 
    
    oldUsername:{
        type : String

    },
    newUsername:{
       type : String

    } , 
    oldEmail:{
        type : String

    },
    newEmail:{
        type : String

    }, 
    oldPassword:{
        type : String

    } , 
    newPassword:{
        type : String

    } , 




} , {timestamps:true})
const UpdateDetails = mongoose.model("updateDetails" , updateDetails)
module.exports = UpdateDetails
