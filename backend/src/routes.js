const { Router } = require('express')
const DevController = require('./controllers/devController')
const searchController = require('./controllers/searchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', searchController.index)

module.exports = routes
