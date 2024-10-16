import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { course } from './constants/details'

function App() {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
