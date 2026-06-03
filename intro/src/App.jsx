import { useReducer, useState } from "react"

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload
      break
    case 'decrement':
      return state - action.payload
      break
    case 'reset':
      return 0
      break
    default:
      return state
  }
}

const App = () => {
  const [inputValue, setInputValue] = useState(1)
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <section>
      <div>
        <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
        <button onClick={() => dispatch({type: 'increment', payload: Number(inputValue)})}>+</button>
        <button onClick={() => dispatch({type: 'decrement', payload: Number(inputValue)})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      </div>
      <h1>Count: {state}</h1>
    </section>
  )
}

export default App