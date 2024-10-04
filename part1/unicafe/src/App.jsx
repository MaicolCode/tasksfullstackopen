import { useState } from 'react'
import './App.css'

function App() {
  const name = 'Petter'
  const age = 20

  return (
    <>
      <h1>Grettings</h1>
      <Hello name='Maicol' age={21} />
      <Hello name={name} age={age} />
    </>
  )
}

function Hello(props) {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

export default App
