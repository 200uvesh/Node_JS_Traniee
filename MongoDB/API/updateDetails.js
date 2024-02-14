const accessDetails = require("../API/accessDetails.js")
const doctorDetails = require("../models/models.doctor.js")
const updateData = async()=>{
    const showData = await doctorDetails.updateOne({name:"SK Gupta"}  , {$set : {
        qualification:"MBBS , MS(AIIMS PATNA)"
    }})
     console.log(showData)
     accessDetails()
     
}
module.exports = updateData