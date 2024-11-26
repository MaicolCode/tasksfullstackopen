import { useState } from 'react'

function duplicatePerson(person, persons) {
  return persons.findIndex((p) => p.name === person)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [search, setSearch] = useState(persons)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const name = data.get('person')
    const phone = data.get('phone')

    if (duplicatePerson(name, persons) !== -1) {
      alert(`${name} is already added to phonebook`)
      e.target.person.value = ''
      e.target.phone.value = ''

      return
    }

    setPersons([
      ...persons,
      { name: name, number: phone, id: persons.length + 1 }
    ])
    setSearch([
      ...persons,
      { name: name, number: phone, id: persons.length + 1 }
    ])

    e.target.person.value = ''
    e.target.phone.value = ''
  }

  const handleChange = (e) => {
    const searchPerson = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setSearch(searchPerson)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search eventSearch={handleChange} />
      <h2>Add new number</h2>
      <PersonForm savePerson={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={search} />
    </div>
  )
}

function Search({ eventSearch }) {
  return (
    <div>
      Buscar: <input onChange={eventSearch} />
    </div>
  )
}

function PersonForm({ savePerson }) {
  return (
    <form onSubmit={savePerson}>
      <div>
        name: <input name='person' />
        phone: <input name='phone' />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

function Persons({ persons }) {
  return (
    <ul>
      {persons.length > 0
        ? persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))
        : 'No numbers found ...'}
    </ul>
  )
}

export default App
