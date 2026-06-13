import { useReducer } from "react"

const CounterReducer = () => {

    type Actions = {
        type: string
    }

  function reducer(state: number, action: Actions) {
    switch (action.type) {
        case 'increment':
            return state + 1
            break;
        case 'decrement':
            return state - 1
        default: 
            return state
    }
  }
  
  const [count, dispatch] = useReducer(reducer, 0) 

  function increment() {
    dispatch({
        type: 'increment'
    })
  }

  function decrement() {
    dispatch({
        type: 'decrement'
    })
  }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterReducer