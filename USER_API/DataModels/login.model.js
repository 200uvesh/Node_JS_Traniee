// Login Data models

const mongoose = require("mongoose")
const Login = mongoose.Schema({ 
    email:{
        type : String , 
        required : true
    } , 
    password:{
        type:String , 
        required: true
    }

} ,{timestamps: true})
const login = mongoose.model("Login" , Login)
module.exports=login


