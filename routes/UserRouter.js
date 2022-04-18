const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/login', controller.Login)
Router.post('/register', controller.Register)

module.exports = Router