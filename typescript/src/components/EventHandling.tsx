import React from 'react'

const EventHandling = () => {

  function mouseEnterHandler(e: React.MouseEvent<HTMLHeadingElement>) {
    console.log("mouse entered: ", e.currentTarget)
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("button clicked: ", e.currentTarget)
  }

  return (
    <div>
        <h1 onMouseEnter={mouseEnterHandler}>Event Handling In TypeScript Example</h1>
        <button onClick={clickHandler}>Click Event Handling</button>
    </div>
  )
}

export default EventHandling