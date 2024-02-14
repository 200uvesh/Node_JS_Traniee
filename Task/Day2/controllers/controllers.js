require("dotenv").config()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
const RegisterUser = require("../DataModels/registration.model.js")
const LoginUser = require("../DataModels/login.model.js")

 
 
 
 





//REGISTER API
exports.register=  async(req , res)=>{
    data = new RegisterUser({
      username:req.body.username,
      email:req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })
         try{
            const already_exist=  await RegisterUser.findOne({email:data.email}) || await RegisterUser.findOne({username:data.username})
            if(!already_exist){
                 
                await data.save()
                 
               
                const payload = {
                    username : data.username  , 
                    email: data.email, 
                     password: data.password
                  }
                
                  jwt.sign(payload , process.env.JWT_SECRET_KEY , (error , token)=>{
                      if(error){
                         
                          throw error
                      }
                      console.log(token) 
                      res.send(token)
                                                  
                  } )
            }
            else{
                res.send("Email is already registered")
                console.log("Email is alreday registered")
            }
         }
    catch(err){

        console.log("Something went wrong")
        res.json(err)
    }
}  





//LOGIN API
exports.login= async (req , res)=>{
    const data = new LoginUser(
        {
            email: req.body.email,
            password: req.body.password
        }
    )
    try{
    
    const values = await RegisterUser.findOne({email:data.email})
   
    if(values){
         
       const hashPassword =  values.password
       const isMatch = await bcrypt.compare(data.password,hashPassword)
     
       //bcrypt.compare(req.body.password,RegisterUser.password)
      
        if(isMatch){
            
            const payload = {
              username : values.username , 
              email:values.email, 
              password:values.password
            }
             jwt.sign(payload , process.env.JWT_SECRET_KEY , (error , token)=>{
                if(error){
                    throw error
                }
                console.log(token) 
                res.send(token) 

            } )
            
            console.log("Login Sucess")
          
             res.send(token)
            
        }
        else{
            res.send("Email or Password is Incorresct")
            console.log("Email or Password is Incorrect")    
        }
    }
    else{
        res.send("Email or Password is Incorresct")
        console.log("Email or Password is Incorresct")
    }    
}
catch(error){
    console.log("Something went wrong" + error)
    res.status(400).send("Something Went Wrong")
}
}






//GET DETAILS API
exports.getDetails=async(req , res)=>{
        //  req.values=payload
         console.log("This is done now")
         const data = req.values
         res.send(data
            ) 
 }

//UPDATE-username API
exports.updateUsername= async(req , res)=>{

}
//UPDATE-email API
exports.updateEmail=async(req , res)=>{

}
//UPDATE-password API
exports.updatePassword=async(req , res)=>{

}

//DELETE-user API
exports.deletUser = async(req , res)=>{

}