import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        alert('Failed to retrieve persons from server.')
        console.log(error)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault() 
    // .some returns T/F
    if (!persons.some(person => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${returnedPerson.name} to phonebook.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(`${error.response.data.error}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
    else {
      if(window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        // Returns first element in array where condition is true
        const thisPerson = persons.find(person => person.name === newName)
        const personObject = {
          ...thisPerson,
          number: newNumber
        }
        personService
          .update(personObject.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== thisPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(`Updated ${personObject.name}'s phone number to ${personObject.number}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== thisPerson.id))
            setNewName('')
            setNewNumber('')
            setMessage(`Information of ${personObject.name} has already been removed from the server.`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    }
  }

  const deletePerson = (id) => {
    const thisPerson = persons.filter(person => person.id === id)
    const personName = thisPerson[0].name
    const personID = thisPerson[0].id
    if (window.confirm(`Delete ${personName} from phonebook?`)) {
      personService
        .remove(personID)
        .catch(error => {
          alert(`Failed to delete ${personName} from the server.`)
          console.log(error)
        })
      setPersons(persons.filter(person => person.id !== personID))
      setMessage(`Deleted ${personName} from the phonebook.`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleShowChange = (event) => {
    setShow(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.includes(show))

  return (
    <div className='app'>
      <h1>Phonebook</h1>
      <Message message={message} />
      <Filter value={show} onChange={handleShowChange} />
      <h2>Add a new person</h2>
      <PersonForm 
        onSubmit={addPerson} 
        valueName={newName}
        onChangeName={handleNameChange}
        valueNumber={newNumber}
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
