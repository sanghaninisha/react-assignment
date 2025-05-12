import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList />
      <Counter />
    </>
  )
}

export default App
