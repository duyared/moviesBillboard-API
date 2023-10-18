const mongoose = require('mongoose')

const FavoriteSchema = mongoose.Schema({
    id:{
       type:Number,
       required:[true,'please provide an id'],
    },  
    title:{
        type:String,
        required:[true,'please provide a title'],
        minlength:2
    },
    poster_path:{
        type:String,
        required:[true,'please provide a poster path']
    },
    release_date:{
        type:String,
        required:[true,'please provide a release date'],
    },
    vote_average:{
        type:Number,
        min:[0,'rating must be between 0 and 10'],
        max:[10,'rating must be between 0 and 10']
    },
    language:{
        type:String,
        maxlength:50,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please provide a user']
    },
    type:{
        type:String,
        enum:['tv','movie'],
        required:[true,'please provide a type']
    }
},{timestamps:true})

module.exports = mongoose.model('Favorite',FavoriteSchema)

// Title
// Release Date
// Genre
// Director
// Cast
// Plot Summary
// Runtime
// Language
// Production Company
// Country
// Awards
// Rating
// Box Office
// Poster/Image
// Trailer
// Movie Stills
// Cast Photos
// Director Photo
// Behind-the-Scenes Images