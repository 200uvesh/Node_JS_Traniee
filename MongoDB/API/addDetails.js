
const doctorDetails = require("../models/models.doctor.js")
const hospitalDetails = require("../models/models.hospital.js")
const patientDetails = require("../models/models.patient.js")
 


const CreateData= async()=>{

const addDetailsD =  new doctorDetails({
    name:"SK Gupta" , 
    qualification:" MBBS , MD (AIIMS) ",
    experiance:5
},
)
 await addDetailsD.save()


  const hospitalDetailsD =  new hospitalDetails({
    name:"NCR HOSPITAL MEERUT" , 
    address :" MEERUT , UTTAR PRADESH ",
    specilisation: " lIVER  specialist"
},
)

await hospitalDetailsD.save()



const patientDetailsD =  new patientDetails({
    name:"Mannu" , 
    age:64,
     bloodGroup:'B',
     disease:"Hemanzeoma"

},
)
await patientDetailsD.save()
console.log("Data Saved Sucessfully")

}

module.exports=CreateData