import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FruitList from './FruitList'
import UserList from './UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FruitList />
     <UserList />
    </>
  )
}

export default App
