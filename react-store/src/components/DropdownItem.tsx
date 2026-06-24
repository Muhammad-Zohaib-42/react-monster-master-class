type DropdownItemProps = {
    option: string
}

const DropdownItem = ({option}: DropdownItemProps) => {
  return (
    <li className="w-full">
        <button className="px-3 py-1 transition hover:bg-slate-200 w-full text-left">{option}</button>
    </li>
  )
}

export default DropdownItem