const Router = require('express').Router()
const controllers = require('../controllers/PostController')

Router.get('/recent', controllers.GetRecentPosts)
Router.get('/:post_id', controllers.GetPostDetails)
Router.post('/:user_id', controllers.CreatePost)
Router.put('/:post_id', controllers.UpdatePost)
Router.delete('/:post_id', controllers.DeletePost)

module.exports = Router