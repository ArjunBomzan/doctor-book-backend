


const handelResourceNotfound = (req, res) => {
    console.log("err is", err.name)
}

const handelServerError = (err, req, res, next) => {

    let statuscode = 500
    let message = "Server Error"
    let errors = []

     if (err.name == "ValidationError") {
        statuscode = 400;
        message = "Bad Request";
      errors=Object.entries(err.errors).map(error=>{
        return {
            param:error[0],
            message:error[1].message
        }
      })

    } 
  
    else if (err.name == "CastError") {
        statuscode = 404;
        message = "Resrouce Not found"
    }

    res.status(statuscode).send({
        msg: message + " " + err.message,
        errors
    })

}
module.exports = {
    handelServerError, handelResourceNotfound
}