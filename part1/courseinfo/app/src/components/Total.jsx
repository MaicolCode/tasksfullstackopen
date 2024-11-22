export default function Total({ parts }) {
  const exercises = parts.map((val) => val.exercises)
  return <strong>Total exercises: {exercises.reduce((a, b) => a + b)}</strong>
}
