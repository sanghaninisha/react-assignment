import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginControl from './LoginControl'
import VotingEligibility from './VotingEligibility'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginControl />
      <VotingEligibility  age={20} />
    </>
  )
}

export default App
