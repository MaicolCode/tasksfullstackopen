function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 5
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

function Header({ course }) {
  return <h1>{course}</h1>
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

function Total({ parts }) {
  const exercises = parts.map(val => val.exercises)
  return <p>Total {exercises.reduce((acc, excs) => acc + excs, 0)}</p>
}

export default App
