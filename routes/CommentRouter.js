const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/recent', controller.getAllComments)
Router.post('/:user_id/:post_id', controller.newComment)

module.exports = Router