const mongoose=require("mongoose")
require("dotenv").config()
const URI=process.env.MONGODB
console.log(URI)
mongoose.connect(URI)
.then(() => console.log('DB Connected!'));