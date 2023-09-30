const { UnauthenticatedError } = require("../errors")
const jwt = require('jsonwebtoken')


const auth = (req,res,next) =>{
    //check header 
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('authentication failed')
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        //attach user to request for other routes
        req.user = {userId:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('authentication failed')
    }

}

module.exports = auth