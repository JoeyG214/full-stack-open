// This file is only for testing purposes. 

const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length > 5) {
  console.log("Please match the following format: node mongo.js <password> <name> <number>")
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://phonebook:${password}@cluster0.8xzqskw.mongodb.net/personApp?retryWrites=true&w=majority`

mongoose
  .connect(url)
  .then(result => {
    console.log('Connected')
  })
  .catch(error => {
    console.log(error)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name,
  number,
})

if (process.argv.length === 5) {
  person
    .save()
    .then(result => {
      console.log(`Added ${name} number ${number} to phonebook`)
      mongoose.connection.close()
    })
} else {
  Person
    .find({})
    .then(people => {
      console.log('phonebook:')
      people.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })
}

// mongoose
//   .connect(url)
//   .then((result) => {
//     console.log('connected')

//     const note = new Note({
//       content: 'HTML is Easy',
//       date: new Date(),
//       important: true,
//     })

//     return note.save()
//   })
//   .then(() => {
//     console.log('note saved!')
//     return mongoose.connection.close()
//   })
//   .catch((err) => console.log(err))