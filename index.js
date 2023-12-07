const express=require("express")
const cors=require("cors")
const  user_router  = require("./routes/users")
const doctor_details=require("./routes/doctorDetails")
const book=require("./routes/book")
const { handelResourceNotfound, handelServerError } = require("./controller/errorhandle")
const { khalti } = require("./controller/khalti")

require("./config/databse")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
app.use(user_router)
app.use(doctor_details)
app.use(book)
app.post("/khalti",khalti)






app.use(handelResourceNotfound)
app.use(handelServerError)
app.listen(3000,()=>{
    console.log("server is listening ate port 3000")
})