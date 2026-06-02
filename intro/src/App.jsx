import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect runs")
    document.title = `count: ${count}`
  },[count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default App