 require("dotenv").config()
 const jwt= require("jsonwebtoken")

 const verifyToken=async function(req , res , next){
 
    const token = req.params.id;
    if(!token){
        return res.json(
            {
                message:"Not Authrozied"
            }
        )
    }
     jwt.verify(token , process.env.JWT_SECRET_KEY , (error , payload)=>{
        if(error){
            return res.json({
                message:"Token Is Incorrect"
            })
        }
        else{
            
            console.log("You Have sucessfully verified and Get Details !! :--> ")
             req.values=payload
            next()

        }        
 })
 }
module.exports = verifyToken