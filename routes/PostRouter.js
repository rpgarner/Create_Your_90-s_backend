const Router = require('express').Router()

Router.get('/')
Router.post('/:user_id')
Router.put('/:post_id')
Router.delete('/:post_id')

module.exports = Router