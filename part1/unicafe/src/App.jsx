function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 }
        ]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
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
        <Part key={index} part={part.part} exercises={part.exercises} />
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

function Total({ exercises }) {
  return <p>Total {exercises.reduce((acc, excs) => acc + excs, 0)}</p>
}

export default App
