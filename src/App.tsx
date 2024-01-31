import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src="src/assets/card1.png" className="card-img-top" alt="Image cap" />
      </Card>
      <Card title="Special title treatment" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
    </>
  )
}

export default App
