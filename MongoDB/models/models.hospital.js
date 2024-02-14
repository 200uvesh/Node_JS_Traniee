const mongoose = require("mongoose")
const hospital = mongoose.Schema({
    name:{
        type : String , 
        required : true

    },
    address:{
        type : String , 
        required : true

    } , 
    specilisation:{
        type : String , 
        

    } , 

} , {timestamps:true})

 const hospitalDetails = mongoose.model("hospital" , hospital)
 module.exports=hospitalDetails