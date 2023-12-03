
const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//joil validation is skiped
const user=(req,res,next)=>{
res.send(req.user)
}

const signup = async (req, res, next) => {

    try {
        let hashed = await bcrypt.hash(req.body.password, 10);
        let user = await User.create({ ...req.body, password: hashed })
        user = user.toObject()
        delete user.password
        res.status(200).send(user)
    } catch (err) {
        next(err)
    }

}

const login = async (req, res, next) => {

 
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        let matched = await bcrypt.compare(req.body.password, user.password)
        if (matched) {
            user = user.toObject()
            delete user.password
            let token = jwt.sign(user, process.env.JWT_SECRET);
            res.status(200).send({ message: "login success",user, token })
        } else {
            res.status(401).send({ message: "invalid Credentials"})
        }
    }
    else {
        res.status(401).send({ message: "no user found with these Credentials"})
    }

}


module.exports = { signup, login,user }