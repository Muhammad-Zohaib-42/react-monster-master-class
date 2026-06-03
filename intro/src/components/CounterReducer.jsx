import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return 0;
            break;
        default:
            return state;
    }
}

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <main>
        <div>
            <button onClick={()=>dispatch({type: 'increment'})}>+</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
        </div>
        <h1>Count: {count}</h1>
    </main>
  )
}

export default CounterReducer