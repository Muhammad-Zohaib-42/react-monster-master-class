import React, { useRef } from 'react'

const App = () => {
  const inputElement = useRef()

  function handleBtnClick() {
    inputElement.current.focus()
    inputElement.current.value = "Muhammad Zohaib"
  }

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={handleBtnClick}>Focus Input & Write Name</button>
    </div>
  )
}

export default App