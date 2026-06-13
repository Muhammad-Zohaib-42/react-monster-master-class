import { useRef } from "react"

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  function focusInput() {
    inputRef.current!.focus()
  }

  return (
    <div>
        <input type="text" placeholder="Enter name" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput