const {register , login , getDetails , updateUsername , updateEmail , updatePassword, deletUser} = require("../controllers/controllers.js")
const express = require("express")
 
const checkAuth = require("../middlewares/auth.js")

const router = express.Router()


 
router.get('/' , (req , res)=>{
    res.send("This is Home Page")
})
 

//ROUTES
router.post('/register'   ,   register )
router.post("/login" ,login )
router.get("/getDetails/:id"  ,checkAuth , getDetails )  
router.put("/updateUsername" , checkAuth , updateUsername)
router.put("/updateEmail" , checkAuth , updateEmail)
router.put("/updatePassword" , checkAuth , updatePassword)
router.delete("/deleteUser" , checkAuth , deletUser)


 
module.exports = router
 










//PATH , STATIC , URLENCODER , 

//app.use('/static', express.static(path.join(__dirname, 'Static Files'));

//app.get('/file', (req, res)=>{ 
//     res.sendFile(path.join(__dirname,'image.jpg')); 
// }); 



// const express = require('express');
// const app = express();
// const path = require('path');
 
// // Static Middleware
// console.log(app.use(express.static(
//     path.join(__dirname, 'public'))))



//app.use(express.urlencoded({ extended: false }));
