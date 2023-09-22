const { StatusCodes } = require("http-status-codes")
const User = require("../models/User")

const register = async (req,res) =>{
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.ACCEPTED).json({user:{name:user.name},token})
}

const login = async (req,res) =>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(StatusCodes.BAD_REQUEST).json('please provide email and password')
    }
    const user  = await User.findOne({email})

    if(!user){
        res.status(StatusCodes.UNAUTHORIZED).json('wrong credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        res.status(StatusCodes.UNAUTHORIZED).json('wrong credentials')
    }
    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

module.exports = {login,register}