const axios = require("axios")

const khalti = async (req, res, next) => {
    try {

        await axios.post("https://rc-epay.esewa.com.np/api/epay/main/v2/form",
            req.body,
            {
                headers:{
                    Authorization:"key 8gBm/:&EnhH.1/q"
                }

            }
            )
            .then((response) => {
                res.status(200).send(response)
            })
    } catch (err) {
        next(err)
    }
}

module.exports = { khalti }