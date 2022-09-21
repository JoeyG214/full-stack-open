import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  const addPerson = (event) => {
    event.preventDefault() 
    //Check to see how this works
    if (!persons.some(item => item.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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
      <div className='filter'>
        Search Name: 
        <input 
        value={show}
        onChange={handleShowChange}
        />
      </div>
      <h2>Add a new person</h2>
      <div className='person-form'>
        <form onSubmit={addPerson}>
          <div>
            Name: 
            <input 
            value={newName} 
            onChange={handleNameChange} 
            />
          </div>
          <div>
            Number:
            <input 
            value={newNumber}
            onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <div className='persons'>
        <ul>
          {personsToShow.map(person => 
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App;
