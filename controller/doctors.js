const User = require("../model/user")

const doctor = async (req, res, next) => {
    try {

        let data = await User.find({ _id: req.body.id }, { password: 0 })
        res.status(200).send(data)
    }
    catch (err) {
        next(err)
    }

}

const doctors = async (req, res, next) => {
    let data = await User.find({ role: "doctor" }, { password: 0 })
    // console.log(data)

    delete data.password
    res.send({
        message: "all the doctors",
        data
    })
}




module.exports = { doctors, doctor }