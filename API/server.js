const express = require("express")
const mongoose = require("mongoose")
const bodyParser =  require("body-parser")
const app = express()
const PORT = 3000
app.use(bodyParser.json())
// mongoose.connect( 'mongodb+srv://200uveshahmed:9058015786@Uvesh@cluster0.sjhjko4.mongodb.net/?retryWrites=true&w=majority')
  

const User = mongoose.model('User' ,{
    username : String , 
    email : String , 
    password : String
   })

   


// User SignUp API
 app.post('/SignUp' , (req , res)=>{
    try{
    const {email , password } = req.body
    const newUser = new User({username , email , password})
    newUser.save();
    res.send("User registered Sucessfully")
    }
    catch(error){
        console.log(error)
        res.send("Something Went Wrong")
    }
 })




 // Usre SignIn API
 app.post('/SignIn' , (req , res)=>{
    try{
       const {username , email , password} = req.body
       const user =  User.findOne({username})
       if(!user){
        res.send("Email  or password is Wrong")
       }
       if(password!==User.password){
        res.send("Email or password is wrong ")
       }
       res.send("signIn Sucessfully")
       console.log("Login sucessfull")
    }
    catch(error){
        console.error(error)
        res.send("Something Went Wrong")
    }
 })


app.get('/' ,(req , res )=>{
    res.send("Hii I am From serever")
})
 
app.listen(PORT , ()=>{
    console.log(`_srever is created at_ http://localhost:${PORT}`)

})

//200uveshahmed
//'mongodb+srv://200uveshahmed:9058015786@Uvesh@cluster0.sjhjko4.mongodb.net/' 

