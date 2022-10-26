const infoRouter = require('express').Router()
const Person = require('../models/person')

// HTTP Requests Handling /
infoRouter.get('/info', (request, response) => {
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

module.exports = infoRouter