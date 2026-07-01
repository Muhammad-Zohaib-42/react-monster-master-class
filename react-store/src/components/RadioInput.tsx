import { useContext } from "react"
import { StoreContext } from "../contexts/StoreContext"

type RadioInputProps = {
    text: string
}

const RadioInput = ({text}: RadioInputProps) => {
  const {category, setCategory} = useContext(StoreContext)!

  return (
    <li className="flex gap-1.5">
        <input checked={category == text} onChange={() => setCategory(text)} type="radio" name="category" id={text} />
        <label className="capitalize" htmlFor={text}>{text}</label>
    </li>
  )
}

export default RadioInput