const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const infoRouter = require('./controllers/info')
const personsRouter = require('./controllers/persons')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const morgan = require('morgan')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
//app.use(middleware.requestLogger)

morgan.token('data', (request) => {
  const { body } = request
  return JSON.stringify(body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.use('/', infoRouter)
app.use('/api/persons', personsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app