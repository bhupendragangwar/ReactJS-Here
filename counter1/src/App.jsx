import { useState } from 'react'
import './App.css'

function App() {
  const defaultValue = 5
  const [count, setCount] = useState(defaultValue)
  let currentValue = count;

  const addValue = () => {
    let maxValue = 20;
    if (currentValue < maxValue) {
      setCount(count + 1)
    }
  }
  const removeValue = () => {
    let minValue = 0
    if (currentValue > minValue) {
      setCount(count - 1)
    }
  }

  const refresh = () => {
    setCount(defaultValue)
  }

  return (
    <>
      <div id='text'>
        <h1>React Learn | counter Project</h1>
        <p>Counter Value: {count}</p>
      </div>
      <div id='Project-working'>
        <button onClick={addValue}>
          Add value: {count}
        </button>
        <br />
        <br />
        <button onClick={removeValue}>
          Decrease Value: {count}
        </button>
        <br></br><br />
        <button onClick={refresh}>
          refresh
        </button>
      </div>
    </>
  )
}
export default App
