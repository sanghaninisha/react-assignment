import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import ClassComponent from './ClassComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeting name={"nisha"}/>
        <ClassComponent  />
      </div>
    </>
  )
}

export default App
