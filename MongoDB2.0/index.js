require("dotenv").config()

const express = require("express")
const app = express()

const PORT = process.env.PORT



 app.get("/" , (req , res)=>{
    res.send(` Hii I am From Server `)
 })
app.listen(PORT , ()=>{
    console.log(`Server is started http://localhost:${PORT}`)
})



