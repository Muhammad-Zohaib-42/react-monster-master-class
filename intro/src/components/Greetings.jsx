import React from 'react'

const Greetings = () => {
  const name = "zohaib"

  return (
    <div>
        <h1>Welcome {name}</h1>
        <p>{Date.now()}</p>
    </div>
  )
}

export default Greetings