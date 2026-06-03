import React, { useId } from 'react'

const App = () => {
  const id = useId()

  return (
    <div>
      <label htmlFor={id}>Username</label>
      <input type="text" id={id} name='username' placeholder='Enter username' />
    </div>
  )
}

export default App