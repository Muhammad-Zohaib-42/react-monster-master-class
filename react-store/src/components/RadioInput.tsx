type RadioInputProps = {
    text: string
}

const RadioInput = ({text}: RadioInputProps) => {
  return (
    <div>
        <input type="radio" name="category" id={text} />
        <label htmlFor={text}>{text}</label>
    </div>
  )
}

export default RadioInput