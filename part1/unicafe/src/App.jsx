import { Content } from './components/Content'
import { Header } from './components/Header'
import { Total } from './components/Total'
import { course, parts } from './constants/details'

function App() {
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
