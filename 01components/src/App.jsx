import { useState } from 'react'
import './App.css'
import UserCards from './components/UserCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCards />
      <UserCards />
      <UserCards />
    </>
  )
}

export default App
