
const { StatusCodes } = require('http-status-codes')
const Favorite = require('../models/Favorite')
const { NotFoundError } = require('../errors')


const getAllFavorites = async (req,res) =>{
    const favorites = await Favorite.find({createdBy:req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json(favorites)
}

const getFavorite = async (req,res) =>{
    const {user:{userId},params:{id}} = req
    const favorite = await Favorite.findOne({_id:id,createdBy:userId})
    if(!favorite){
        throw new NotFoundError(`no favorite with id ${id}`)
    }
    res.status(StatusCodes.OK).json(favorite)
}

const addFavorite = async (req,res) =>{
    req.body.createdBy = req.user.userId
    const favorite = await Favorite.create(req.body)
    
    res.status(StatusCodes.CREATED).json(favorite)
}

const deleteFavorite = async (req,res) =>{
    const {user:{userId},params:{id}} = req
    const favorite = await Favorite.findOneAndDelete({createdBy:userId,_id:id})

    if(!favorite){
        throw new NotFoundError(`no favorite with id ${id}`)
    }

    res.status(StatusCodes.OK).json(favorite)
}

module.exports = {getAllFavorites,getFavorite,addFavorite,deleteFavorite}