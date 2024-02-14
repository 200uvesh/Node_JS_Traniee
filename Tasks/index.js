const express = require("express")
const app = express()
const dotenv = require("dotenv") 
dotenv.config()
 const mongodbConnect = require("./config/db")
 mongodbConnect()
 
 

//ROUTES
 app.get('/' , (req , res)=>{
    res.send("Hii I am From Express")
 })





// Listners
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`Server Started at http://localhost:${PORT}`)
})
