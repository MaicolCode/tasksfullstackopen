import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalReactions = good + neutral + bad

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div className='actions'>
        <Button actionClick={handleGood} text='Good' />
        <Button actionClick={handleNeutral} text='Neutral' />
        <Button actionClick={handleBad} text='Bad' />
      </div>
      <h1>Statistics</h1>
      <section className='statistics'>
        {totalReactions > 0 ? (
          <Statistics
            totalReactions={totalReactions}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <span className='no-reactions'>No reactions yet...</span>
        )}
      </section>
    </div>
  )
}

export default App

function Button({ text, actionClick }) {
  return <button onClick={actionClick}>{text}</button>
}

function Statistics({ totalReactions, good, neutral, bad }) {
  const average = ((good - bad) / totalReactions).toFixed(5)
  const promedio = ((good / totalReactions) * 100).toFixed(5)

  return (
    <>
      <StatisticLine title='Good' value={good} />
      <StatisticLine title='Neutral' value={neutral} />
      <StatisticLine title='Bad' value={bad} />
      <StatisticLine title='Total' value={totalReactions} />
      <StatisticLine title='Average' value={average} />
      <StatisticLine title='Positive' value={`${promedio} %`} />
    </>
  )
}

function StatisticLine({ title, value }) {
  return (
    <span>
      {title}: {value}
    </span>
  )
}
