export function Total({ parts }) {
  const exercises = parts.map(val => val.exercises)
  return <p>Total {exercises.reduce((acc, excs) => acc + excs, 0)}</p>
}
