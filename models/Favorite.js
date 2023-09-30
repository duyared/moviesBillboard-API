const mongoose = require('mongoose')

const FavoriteSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'please provide a title'],
        minlength:2
    },
    releaseDate:{
        type:String,
        required:[true,'please provide a release date'],
    },
    Genre:{
        type:String,
        required:[true,'please provide a genre'],
        maxlength:50,
    },
    rating:{
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