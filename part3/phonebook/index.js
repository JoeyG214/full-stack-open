require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const Person = require('./models/person')

// Middleware - Used for handling request and reponse objects
app.use(cors())

// Used for the POST HTTP Method
app.use(express.json())

app.use(express.static('build'))

morgan.token('data', (request, response) => {
  const { body } = request
  return JSON.stringify(body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

// HTTP Requests Handling
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => {
      response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
  Person
    .findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

app.get('/info', (request, response) => {
  const currentDate = new Date()
  response.send(
    `<div>
      <p>Phonebook has info for ${persons.length} people</p>
    </div>
    <div>
      <p>${currentDate}</p>
    </div>`
  )
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!(body.name && body.number)) {
    return response.status(400).json({ error: 'content missing' })
  }
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
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})