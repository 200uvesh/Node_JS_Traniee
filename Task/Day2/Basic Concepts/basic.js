
/*

 --------------(HTTP's Status Code)---------------
 ----------------REMIND IT------------------------

 1> (100-199) ---> Informational Response 
 2> (200-299) ---> Sucessful Response (OK)
 3> (300-399) ---> Redirect message
 4> (400-499) ---> Client error response
 5> (500-599) ---> Server error response


*/




// Method-1 POST 
router.post('/post' , (req , res)=>{
    res.send("POST API")
})

// method-2  GET all
router.get('/getAll' , (req,res)=>{
    res.send("GET ALL API")
})

// method-3 Get by ID
router.get('/getOne/:id' , (req,res)=>{
    res.send("API GET BY ID")
})

//method-4 Update by ID
router.patch('/update/:id' , (req,res)=>{
    res.send("UPDATE API")
})

//method-5 delete by ID
router.delete('/delete/:id' , (req,res)=>{
    res.send("DELETE API")
})







/*

 --------------MongoDb Methods----------------

 1> .save()   @For Save data in DataBase
 2> .find()   @For Get all the data
 3> .findById(_id)   @For Get the data by Specific ID 
 4> .findByIdAndUpdate(_id , update_data , _option)   @For Update the data
 5> .findByIdAndDelete(_id)    @For Delete the data


*/




//--------------------------------API's----------------------------------

// Registration(POST) API-1 (STATIC)
 
router.post('/send' , async (req , res)=>{
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



 
// lOGIN API (GET , UPDATE , DELETE )

// How to Get All the Data
router.get('/getAllData' , async (req , res)=>{
    try{
        const result = await User.find()
        res.json(result)
    }
     catch(err){
        console.log(err)
     }
})

// Get data by given id 
router.get('/getDataById/:id' , async(req , res)=>{
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
router.patch('/login/:id' , async(req , res)=>{
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

router.delete('/deleteDataById/:id' ,  async(req , res )=>{
    try{
        const id = req.params.id
        const result =  await User.findByIdAndDelete(id)
         res.send(` the deleted data is ${result} !! `)
    }
    catch(error){
          console.log(error)
    }
})


 


/*
-----------------ROUTER METHOD-----------

const router = express.Router()
app.use(router)

router.get('/homePage' , (req , res)=>{
    res.send("This is Home Page")

})

*/


/*                  USES OF JWT

 
POST ---->  /api/auth/signup	----> signup new account
POST ---->	/api/auth/signin	----> login an account
GET	 ---->  /api/test/all	    ----> retrieve public content
GET	---->   /api/test/user	    ----> access User’s content
GET	---->   /api/test/mod	    ----> access Moderator’s content
GET	---->   /api/test/admin	    ----> access Admin’s content


*/