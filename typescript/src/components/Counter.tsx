import { useReducer } from "react"

type Action = {
  type: string
}

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      break
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  function handleIncrement() {
    dispatch({type: "INCREMENT"})
  }

  function handleDecrement() {
    dispatch({type: "DECREMENT"})
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter