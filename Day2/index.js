//--------------------------Import----------------------------------------------
require('dotenv').config()
const express = require("express")
const connectDB = require("./db/db.js")
const cors = require("cors")
connectDB()
const app = express()
const router = require("./Routes/router.js")

// const jwt = require("jsonwebtoken")



/*

 --------------(HTTP's Status Code)---------------
 ----------------REMIND IT------------------------

 1> (100-199) ---> Informational Response 
 2> (200-299) ---> Sucessful Response (OK)
 3> (300-399) ---> Redirect message
 4> (400-499) ---> Client error response
 5> (500-599) ---> Server error response


*/





//----------------------------Middlewares------------------------------------------
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api" , router)

// app.use(express.json())
 


 

//-----------------------------ROUTES--------------------------------------------

app.get('/' , (req , res)=>{
     res.send("Server Created Sucessfully")
})
 
 