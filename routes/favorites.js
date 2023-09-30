const express = require('express')
const { getAllFavorites, addFavorite, getFavorite, deleteFavorite } = require('../controllers/favorites')
const router = express.Router()


router.route('/').get(getAllFavorites).post(addFavorite)
router.route('/:id').get(getFavorite).delete(deleteFavorite)

module.exports = router