const { axios } = require("axios")

const khalti = async (req, res, next) => {
    try {

        await axios.post("https://a.khalti.com/api/v2/",
            req.body)
            .then((response) => {
                res.status(200).send(response)
            })
    } catch (err) {
        next(err)
    }
}

module.exports = { khalti }