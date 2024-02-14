const control = require("../controllers/controllers.js")
const redirect = require("../controllers/redirect.js")
const express = require("express")
const isVerify = require("../middlewares/authorise.js")

const router = express.Router()
 




router.get('/'   , isVerify , control  )
router.get('/redirect' , redirect )

 


module.exports = router