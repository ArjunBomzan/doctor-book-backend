const Doctor = require("../model/doctorDetail")
const details = async (req, res, next) => {
  
    try {

        let doctor_detail = await Doctor.findone({doctor_id:req.user._id})
        res.status(200).send(doctor_detail)
    } catch (err) {
        next(err)
    }
}

const post_detail = async (req, res, next) => {

    try {

        let doctor_detail = await Doctor.create(req.body)
        res.status(200).send(doctor_detail)
    } catch (err) {
        next(err)
    }
}


module.exports = { details, post_detail }