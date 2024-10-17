import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className='actions'>
        <Button text='Good' />
        <Button text='Neutral' />
        <Button text='Bad' />
      </div>
      <h1>Statistics</h1>
      <section className='statistics'>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </section>
    </div>
  )
}

export default App

function Button({ text }) {
  return <button>{text}</button>
}
