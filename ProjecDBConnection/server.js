const express = require('express')
const http = require('http')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))


app.get('/' , (req , res)=>{

    res.sendFile( 'index.html' );
})
 
const PORT = 9000
app.listen(PORT , (err)=>{
    if(err){
        console.log("Something went wrong "+ err)
    }
    console.log(`Hii I am from http://localhost:${PORT}`)
})




