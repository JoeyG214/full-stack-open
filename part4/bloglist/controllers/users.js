const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body

  if (!username || password.length < 3) {
    return response.status(400).json({ error: 'Must provided username with atleast 3 characters.' })
  }
  if (!name) {
    return response.status(400).json({ error: 'Must provided a name.' })
  }
  if (!password || password.length < 3) {
    return response.status(400).json({ error: 'Must provide password with atleast 3 characters.' })
  }

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter