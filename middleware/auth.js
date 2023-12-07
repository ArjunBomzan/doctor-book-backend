const jwt = require("jsonwebtoken")

const checkAunthentication = (req, res, next) => {

    let token = req.headers?.authorization?.split(" ")[1]
    if (token) {
        let user = null
        try {
            user = jwt.verify(token, process.env.JWT_SECRE);
        }
        catch (err) {

        }
        if (user) {
            req.user = user;

            next()

        } else {
            res.status(401).send({
                msg: "unauthenticated"
            })

        }
    }
    else {
        res.status(401).send({
            msg: "unauthenticated no token"
        })

    }

}

const isDoctor = (req, res, next) => {
    if (req.user.role == "doctor") {
        next()
    }
}
const isVisitor = (req, res, next) => {
    if (req.user.role == "visitor") {

        next()
    }
}
module.exports = { checkAunthentication, isDoctor, isVisitor }