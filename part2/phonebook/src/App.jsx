import { useEffect, useState } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.every(person => person.name !== newName)) {
      personsService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        }
      )
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
          .update(persons.find(person => person.name === newName).id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
          })
      }
    }
  }

  const removeName = (event) => {
    event.preventDefault()
    if (window.confirm(`Delete ${persons.find(person => person.id === event.target.id).name}?`)) {
    
      const id = event.target.id
      personsService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        }
      )
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onchange={handleFilterChange} />
      <h3>Add a new phone number</h3>
      <PersonForm onSubmitAddName={addName} handleNameChange={handleNameChange} handlePhoneNumberChange={handlePhoneNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} onSubmitRemove={removeName}/>
    </div>
  )
}

export default App