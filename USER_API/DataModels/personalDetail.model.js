 const mongoose = require("mongoose")
 const addDetails = mongoose.Schema({
    firstName:{
        type:String , 
        required:true

    } , 
    lastName:{
        type:String , 
        required:true

    } , 
    dateOfBirth:{
        type:String, 
        required:true

    } , 
    age:{
        type:Number , 
        required:true

    }  , 


    // username:{
    //     type:  mongoose.Schema.Types.ObjectId , 
    //     ref:"register"

    // } , 
    // emial:{
    //     type:  mongoose.Schema.Types.ObjectId , 
    //     ref:"register"
        
    // }



 } , {timestamps:true})

 const addPersonalDetails = mongoose.model("addDetails" , addDetails)
 module.exports= addPersonalDetails
 