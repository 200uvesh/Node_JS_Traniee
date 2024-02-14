const mongoose = require("mongoose")

const connectDB = async ()=>{ 

try{
   
     
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}` 
     )
     
     console.log("DB Connection is sucessfully Created")
        //console.log(`${DBInstance.connection.host}`)
    }  



catch(err){
    console.log(" Error is " +err )
    throw err

}
}
module.exports = connectDB
 

 