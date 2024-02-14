 
const doctorDetails = require("../models/models.doctor.js")
const DeleteData = async()=>{
    await doctorDetails.deleteOne({name:"SK Gupta"})
    console.log("data  deleted sucessfully")

}
module.exports = DeleteData