const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AvailableSchema = new Schema({
Doctor:{
    type:ObjectId,
    ref:"User"

},
weeklyShedule:{
   sunday:{
    type:Array
   },
   sunday:{
    type:Array
   },
   monday:{
    type:Array
   },
   tuesday:{
    type:Array
   },
   wednesday:{
    type:Array
   },
   thursday:{
    type:Array
   },
   friday:{
    type:Array
   },
   saturday:{
    type:Array
   },

}
,
})


module.exports=mongoose.model("Available",AvailableSchema)