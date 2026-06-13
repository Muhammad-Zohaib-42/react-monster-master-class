import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

const Counter = () => {
  const {count, increment, decrement} = useContext(CounterContext)

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter