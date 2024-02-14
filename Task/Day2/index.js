//--------------------------Import----------------------------------------------
require('dotenv').config()
const express = require("express")
 
const connectDB = require("./config/mongoDB.js")
connectDB()
const app = express()
const cors = require("cors")
 



//----------------------------Middlewares------------------------------------------
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
 
 
//-----------------------------CREATING-ROUTES--------------------------------------------
const router = require("./Routes/router.js")
app.use('/api' , router)

 // Listners
const PORT = process.env.PORT 
app.listen(PORT , ()=>{
     console.log(`Server is started at http://localhost:${PORT}`)
 })
 