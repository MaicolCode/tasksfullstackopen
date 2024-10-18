import { useState } from 'react'

const arrayGenerate = new Uint8Array(8)
const votedAnecdotes = [...arrayGenerate]

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',

    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votedAnecdotes)

  const handleChange = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    votedAnecdotes[selected]++
    const copy = [...votedAnecdotes]
    setVotes(copy)
  }

  return (
    <>
      <h2>Anecdotes of the day</h2>
      <div className='anecdotes-content'>
        <span className='anecdote'>{anecdotes[selected]}</span>
        <span>Votes: {votes[selected]}</span>
        <div className='actions'>
          <button onClick={handleVote}>Vote</button>
          <button onClick={handleChange}>Change Anecdote</button>
        </div>
      </div>
      <h2>Anecdote with most votes</h2>
      <div className='anecdotes-content'>
        <span className='anecdote'>
          {anecdotes[votes.findIndex((vote) => vote === Math.max(...votes))]}
        </span>
        <span>Has most votes: {Math.max(...votes)}</span>
      </div>
    </>
  )
}

export default App
