import { useState } from 'react'

import './App.css'
import Flip from './Components/Flip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flip/>
    </>
  )
}

export default App
