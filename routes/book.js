const express=require("express")
const { checkAunthentication, isVisitor } = require("../middleware/auth")
const {book} = require("../controller/book")


const router=express.Router()

router.post("/book",checkAunthentication,isVisitor,book)

module.exports=router