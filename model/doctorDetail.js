const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DetailSchema = new Schema({
    doctor_id: {
        type: ObjectId,
        ref: "User",
    },
    specialist: {
        type: String
    },
    phone: {
        type: Number,
    },
    qualification: {
        type: Array
    },
    experience: {
        type: Array,
    },
    bio: {
        type: String,
        maxLength: 50,
    },
    about: {
        type: String,
    },
    timeSlots: {
        type: Array
    },
    ticketPrice: {
        type: Number
    }

})

module.exports = mongoose.model("Doctor", DetailSchema)