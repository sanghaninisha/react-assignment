import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCard from "./UseCard"
import './Card.css'
import Counter from './Counter'
function App() {
  
  return (
    <>
       <UseCard name={"Nisha"} age={25} location={"Ahmedabad"} />
       <Counter />
    </>
  )
}

export default App
