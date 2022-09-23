import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(currentPersons => {
        setPersons(currentPersons)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault() 
    //Check to see how this works
    if (!persons.some(item => item.name === newName)) {
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
      })
    }
    else {
      alert(`${newName} is already in the phonebook`)
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
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App;
