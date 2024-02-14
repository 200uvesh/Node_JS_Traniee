const mongoose = require("mongoose")
const doctor = mongoose.Schema({
    name:{
        type:String , 
        require:true

    } , 
    qualification:{
        type:String , 
        require:true

    }
    ,
    experienceYear:{
        type:Number , 

    }


} , {timestamps:true})

const doctorDetails = mongoose.model("doctor" , doctor)
module.exports = doctorDetails