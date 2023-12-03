
const express=require("express")
const { checkAunthentication, isDoctor, isVisitor } = require("../middleware/auth")
const { details, post_detail } = require("../controller/profile")
const { doctor } = require("../controller/doctors")

const router=express.Router()
router.get("/details",checkAunthentication,isDoctor,details)
router.post("/details",checkAunthentication,isDoctor,post_detail)
router.post("/doctor",checkAunthentication,isVisitor,doctor)
module.exports=
    router