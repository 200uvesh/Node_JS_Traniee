//------------------------------------Imports-------------------------------------- 
const {register , login ,  addPersonalDetail ,getDetails ,  updateUsername , updateEmail , updatePassword, deletUser , resetPassword , forgetPassword} = require("../controllers/controllers.js")
const express = require("express")
const checkAuth = require("../middlewares/auth.js")
const router = express.Router()


router.get('/' , (req , res)=>{
    res.send("This is Home Page")
})
 

//ROUTES
router.post('/register'   ,   register )
router.post("/login" ,login )
router.post("/addPersonalDetails/:id" , checkAuth ,  addPersonalDetail)
router.get("/getDetails/:id"  ,checkAuth , getDetails )  
router.put("/updateUsername/:id" , checkAuth , updateUsername)
router.put("/updateEmail/:id" , checkAuth , updateEmail)
router.put("/updatePassword/:id" , checkAuth , updatePassword)
router.delete("/deleteUser/:id" , checkAuth , deletUser)
// router.get("/forget-password" , forgetPassword)
// router.put("/reset-password" , resetPassword)




 
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
