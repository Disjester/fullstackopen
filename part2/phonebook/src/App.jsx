import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then(response => {
          console.log(response.data)
            setPersons(response.data)
         })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (persons.every(person => person.name !== newName)) {
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
    } else {
      alert(`${newName} is already added to phonebook`)
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
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App