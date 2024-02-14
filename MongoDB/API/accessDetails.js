 
const doctorDetails = require("../models/models.doctor.js")
const ReadData = async()=>{
   const displayData = await doctorDetails.findOne( {name:"SK Gupta"} )
   console.log(displayData)
 
}
module.exports = ReadData