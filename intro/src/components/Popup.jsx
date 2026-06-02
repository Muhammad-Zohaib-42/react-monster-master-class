import React from 'react'
import {createPortal} from "react-dom"

const Popup = ({copied}) => {
  return createPortal(
    <div style={{ position: "absolute", bottom: "3rem" }}>
        {
            copied && <p>Copied to Clipboard</p>
        }
    </div>,
    document.querySelector("#popup-container")
  )
}

export default Popup