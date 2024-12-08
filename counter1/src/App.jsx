import { useState } from 'react'
import './App.css'

function App() {
  const defaultValue = 10
  const [count, setCount] = useState(defaultValue)
  let currentValue = count;

  const addValue = () =>{
    let maxValue = 20;
    if(currentValue < maxValue ){
      setCount(count + 1)
    }
  }
  const removeValue = () =>{
    let minValue = 0
    if(currentValue > minValue){
      setCount(count - 1)
    }
  }

  const refresh = () =>{
    setCount(defaultValue)
  }

  return (
    <>
      <h1>React Learn | counter Project | Understanding hooks</h1>
      <h1>Counter Value: {count}</h1>
      
      <button onClick={addValue}>
        Add value: {count}
      </button>
      <br/>
      <br/>
      <button onClick={removeValue}>
        Decrease Value: {count}
      </button>
      <br></br><br />
      <button onClick={refresh}>
        refresh
      </button>

    </>
  )
}
export default App
