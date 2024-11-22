import Course from './components/Course'
import { course } from './constants/details'

function App() {
  return (
    <div>
      <Course courses={course} />
    </div>
  )
}

export default App
