const {StatusCodes} = require('http-status-codes')

const notFound = async (req,res) =>{
    res.status(StatusCodes.NOT_FOUND).json("route doesn't exist")
}

module.exports = notFound