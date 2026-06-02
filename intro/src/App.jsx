import React, { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name")
    return savedName ? JSON.parse(savedName) : ""
  })

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
  }, [name])

  return (
    <div>
      <h3>Your Name: {name}</h3>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter name' />
    </div>
  )
}

export default App