const mongoose = require("mongoose")
const patient = mongoose.Schema({
    name:{
        type :String ,
        required:true
        

    },
    age:{
        type :Number ,
        required:true

    } , 
    bloodGroup:{
        type : ['A' , 'B' , 'O' , 'AB'],
         required :true

    },
    disease:{
        type : String  ,
        required: true

    }

} ,{timestamps:true})

const patientDetails = mongoose.model("patient" ,patient )
module.exports = patientDetails