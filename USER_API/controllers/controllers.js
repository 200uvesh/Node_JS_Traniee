require("dotenv").config()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
const RegisterUser = require("../DataModels/registration.model.js")
const LoginUser = require("../DataModels/login.model.js")
const updateDetails = require("../DataModels/updateDetails.model.js")
const addPersonalDetails = require("../DataModels/personalDetail.model.js")

 
 
 
 





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






//ADD DETAILS API
exports.addPersonalDetail=async(req , res)=>{
    try{
        const data = new addPersonalDetails(
            {
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: req.body.dateOfBirth,
                age:req.body.age , 
                 
            }
        )

       await data.save()
       console.log("Personal Details saved sucessfull !!")
       res.json(
         
       )
         

    }
    catch(error){
        console.log("Error is Occured : " +error )
        res.send(error)

    }
     

         
 }






//ADD DETAILS API

exports.getDetails = async(req , res)=>{
    try{
        const dataPersonal =  await addPersonalDetails.findOne({})
        const dataRgister = await RegisterUser.findOne({})
        res.status(201).json(

            {
    
                firstName : dataPersonal.firstName,
                lastName :dataPersonal.lastName , 
                dateOfBirth : dataPersonal.dateOfBirth , 
                age:dataPersonal.age , 
                useranme: dataRgister.username , 
                email : dataRgister.email
            }
    
        )

    }
    catch(error){
        console.log("Error " + error)
        res.status(504).send(error)

    }
}







//UPDATE-username API
exports.updateUsername= async(req , res)=>{
     
    try{
        const data = new updateDetails(
            {
                oldUsername:req.body.oldUsername  , 
                newUsername:req.body.newUsername
            }
        )

       const isCheck = await RegisterUser.findOne({username:data.oldUsername})
       if(isCheck){
          console.log("Old Username is not correct ! ! ")
          res.send("Old Username is not correct ! ! ")
       }
         await RegisterUser.updateOne({username:data.oldUsername} , {$set:{username:data.newUsername}})
         console.log("Username  Updated sucessfully !!!")
         res.send("Username  Updated sucessfully !!!")
    }
    catch(error){
        console.log("Something Went Wrong Error is :  " + error)

    }
}





//UPDATE-email API
exports.updateEmail=async(req , res)=>{

    
    try{
        const data = new updateDetails(
            {
                oldEmail:req.body.oldEmail  , 
                newEmail:req.body.newEmail
            }
        )

       const isCheck = await RegisterUser.findOne({email:data.oldEmail})
       if(isCheck){
          console.log("Email is not correct ! ! ")
          res.send("Email is not correct ! ! ")
       }
         await RegisterUser.updateOne({email:data.oldEmail} , {$set:{email:data.newEmail}})
         console.log("Email   Updated sucessfully !!!")
         res.send("Email   Updated sucessfully !!!")
    }
    catch(error){
        console.log("Something Went Wrong Error is :  " + error)

    }

}






//UPDATE-password API
exports.updatePassword=async(req , res)=>{

    
    try{
        const data = new updateDetails(
            {
                _id : req.body._id , 
                oldPassword:req.body.oldPassword  , 
                newPassword:req.body.newPassword
            }
        )

       const isCheck = await RegisterUser.findOne({_id:data._id})
       if(isCheck){
          console.log("Password is not correct ! ! ")
          res.send("Password is notcorrect ! ! ")
       }
         await RegisterUser.updateOne({_id:data._id} , {$set:{password:data.newPassword}})
         console.log("Password  Updated sucessfully !!!")
         res.send("Password  Updated sucessfully !!!")




    }
    catch(error){
        console.log("Something Went Wrong Error is :  " + error)
        res.send(error)

    }


}





//DELETE-user API
exports.deletUser = async(req , res)=>{
  
    try{
        const data = new updateDetails(
            {
                email:req.body.email  , 
                password:req.body.password
            }
        )

       const isCheck = await RegisterUser.findOne({email:data.email})
       if(isCheck){
          console.log(" Username or password is not correct ! ! ")
          res.send(" Username or password is not correct ! ! ")
       }
         await RegisterUser.deleteOne({email:data.email} )
         console.log("  Account delete Sucessfully ")
         res.send("Account delete Sucesfully")
    }
    catch(error){
        console.log("Something Went Wrong Error is :  " + error)

    }

}



// Forget Password API

// exports.forgetPassword= async(req , res)={


// }





// Reset Password API (through mail link)

// exports.resetPassword= async(req , res)={
    

// }
