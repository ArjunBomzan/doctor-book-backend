const express=require("express")
const {signup, login, user} = require("../controller/auth")
const { checkAunthentication } = require("../middleware/auth")
const {doctors} = require("../controller/doctors")
const router=express.Router()
router.get("/doctors",doctors)
router.get("/user",checkAunthentication,user)
router.post("/signup",signup)
router.post("/login",login)

module.exports=
    router
