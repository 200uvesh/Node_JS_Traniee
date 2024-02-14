require("dotenv").config()
const express = require("express")
const app = express()
 


// MIDDLEWARES
// app.use(express.urlencoded({extended:true}))

  


//---CREATING ROUTES----
app.get('/' , (req , res)=>{
    res.send("Welcome to Homepage")
})



const router = require("./routes/routes.js")
app.use('/api' , router)
 

 


 
 



// lISNERS
 const PORT = process.env.PORT
 app.listen(PORT , ()=>{
    console.log(`Server Started at http://localhost:${PORT}`)
 })
