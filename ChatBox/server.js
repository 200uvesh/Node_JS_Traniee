
const express = require('express')
const app = express()
const PORT = 6050;

// set for viewing Engine 
app.set('view engine ' , 'ejs')
app.set('views' , __dirname+'/public')


 
app.get('/'  , (req , res)=>{
     res.render('index.ejs')
})


app.listen(PORT , ()=>{
    console.log(`Server is created Sucessfully http://localhost:${PORT}`)


})
