const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)
Router.get('/:user_id', controller.GetUserProfile)

module.exports = Router