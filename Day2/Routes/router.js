const RegisterUser = require("./DataModels/registration.model.js")
const LoginUser = require("./DataModels/login.model.js")
const PORT =  process.env.PORT
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



// Method-1 POST 
app.post('/post' , (req , res)=>{
    res.send("POST API")
})

// method-2  GET all
app.get('/getAll' , (req,res)=>{
    res.send("GET ALL API")
})

// method-3 Get by ID
app.get('/getOne/:id' , (req,res)=>{
    res.send("API GET BY ID")
})

//method-4 Update by ID
app.patch('/update/:id' , (req,res)=>{
    res.send("UPDATE API")
})

//method-5 delete by ID
app.delete('/delete/:id' , (req,res)=>{
    res.send("DELETE API")
})




//--------------------------------API's----------------------------------

// Registration(POST) API-1 (STATIC)
 
app.post('/send' , async (req , res)=>{
    data = new User(
        {
            username:"uveshahmad30" , 
            email:"uveshahmad30@gmail.com" , 
            password:"9058015786" , 
        }
    )
     await data.save()
    res.send(data)   
}
)







// Registration API (POSTMAN) with Already Registered
app.post('/register' , async(req , res)=>{
    data = new RegisterUser({
      username:req.body.username,
      email:req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })
         try{
            const already_exist=  await RegisterUser.findOne({email:data.email}) || await RegisterUser.findOne({username:data.username})
            console.log(already_exist)
            if(!already_exist){
                 
                await data.save()
                res.json(data)
            }
            else{
                res.send("Email is already registered")
                console.log("Email is alreday registered")
            }
         }
    catch(err){

        console.log("Something went wrong")
        res.send(err)
    }
}  )







// Login User API 
app.post("/login" , async (req , res)=>{
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
            res.send("Login Sucessfully")
            console.log("Login Sucess")
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
}
})









 
 
// lOGIN API (GET , UPDATE , DELETE )

// How to Get All the Data
app.get('/getAllData' , async (req , res)=>{
    try{
        const result = await User.find()
        res.json(result)
    }
     catch(err){
        console.log(err)
     }
})

// Get data by given id 
app.get('/getDataById/:id' , async(req , res)=>{
    try{
        const id = req.params.id
        const result = await User.findById(id)
        res.json(result)
    }
    catch(error){
        console.log(error)
    }
})


// Update the data 
app.patch('/login/:id' , async(req , res)=>{
    const id = req.params.id
    const update_data= req.body
    const option= {new : true}
    try{
   const result = await User.findByIdAndUpdate(id , update_data , option)
   res.send(result)
        }
        catch(err){
            console.log(` Something Error is Occured`)
        }
})


// Delete the data by ID 

app.delete('/deleteDataById/:id' ,  async(req , res )=>{
    try{
        const id = req.params.id
        const result =  await User.findByIdAndDelete(id)
         res.send(` the deleted data is ${result} !! `)
    }
    catch(error){
          console.log(error)
    }
})





// Listners
app.listen(PORT , ()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})



/*

 --------------MongoDb Methods----------------

 1> .save()   @For Save data in DataBase
 2> .find()   @For Get all the data
 3> .findById(_id)   @For Get the data by Specific ID 
 4> .findByIdAndUpdate(_id , update_data , _option)   @For Update the data
 5> .findByIdAndDelete(_id)    @For Delete the data


*/



//-----------------ROUTER METHOD-----------

const router = express.Router()
app.use(router)

router.get('/homePage' , (req , res)=>{
    res.send("This is Home Page")

})

 










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
