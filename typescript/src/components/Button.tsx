interface ButtonShape {
    label: string,
    onClickHandler: () => void,
    disabled: boolean
}

const Button = ({label, onClickHandler, disabled}: ButtonShape) => {
  return (
    <button onClick={onClickHandler} disabled={disabled}>{label}</button>
  )
}

export default Button