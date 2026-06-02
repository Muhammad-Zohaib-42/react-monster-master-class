import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prev => prev + 1)
  }

  function decrement() {
    setCount(prev => prev - 1)
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </section>
  )
}

export default App