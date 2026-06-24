type RadioInputProps = {
    text: string
}

const RadioInput = ({text}: RadioInputProps) => {
  return (
    <li className="flex gap-1.5">
        <input type="radio" name="category" id={text} />
        <label className="capitalize" htmlFor={text}>{text}</label>
    </li>
  )
}

export default RadioInput