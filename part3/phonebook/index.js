require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const Person = require('./models/person')

// Middleware 
app.use(cors())

app.use(express.static('build'))

// Used for the POST HTTP Method
app.use(express.json())

morgan.token('data', (request, response) => {
  const { body } = request
  return JSON.stringify(body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))


// HTTP Requests Handling
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  Person
    .find({})
    .then(persons => persons ? persons.length : 0)
    .then(entries => {
      const currentDate = new Date()
      response.send(
        `<div>
          <p>Phonebook has info for ${entries} people</p>
        </div>
        <div>
          <p>${currentDate}</p>
        </div>`
      )
    })
})

app.get('/api/persons', (request, response, next) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  Person
    .findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  // Validation now done via MongoDB
  // if (body.name === undefined || body.number === undefined) {
  //   return response.status(400).json({ error: 'content missing' })
  // }
  // else if (persons.some(person => person.name === body.name )) {
  //   return response.status(400).json({ error: 'name must be unique' })
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body

  Person
    .findByIdAndUpdate(request.params.id, { name, number }, { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person
    .findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
// handler of requests with result to errors
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})