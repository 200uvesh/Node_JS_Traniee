require("dotenv").config()

const express = require("express")
const app = express()
const databaseConnect= require("./config/db.js")
databaseConnect()
app.use(express.json())



//Add details
const addData = require("./API/addDetails.js")
// addData()


//READ THE DATA 
const showData = require("./API/accessDetails.js")
// showData()



//UPDATE DETAILS 
const updateData = require("./API/updateDetails.js")
// updateData()

//DELETE DETAILS
const deleteData = require("./API/deleteDetails.js")
// deleteData()










const PORT = process.env.PORT
 app.get("/" , (req , res)=>{
    res.send(` Hii I am From Server `)
 })
app.listen(PORT , ()=>{
    console.log(`Server is started http://localhost:${PORT}`)
})



