// Create web server

// Import express
const express = require('express')
const router = express.Router()

// Import module
const comments = require('../models/comments')

// Import controller
const commentsController = require('../controllers/commentsController')

// Create route
router.get('/', commentsController.index)

// Export router
module.exports = router