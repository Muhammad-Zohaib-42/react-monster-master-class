import { BsFilterRight } from "react-icons/bs";
import DropdownItem from "./DropdownItem";
import { useState } from "react";

const FilterBtn = () => {
  const options: string[] = ['Cheap', 'Expensive', 'Popular']

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="px-2 py-1 border border-slate-300 transition hover:bg-slate-200 flex items-center gap-1">
            <BsFilterRight size={25} />
            <span className="font-semibold">Filter</span>
        </button>
        <ul className="absolute left-0 top-[120%] border border-slate-300 w-[120px] py-1" style={{display: isOpen ? "block" : "none"}}>
            {
                options.map((option, index) => <DropdownItem key={index} option={option} />)
            }
        </ul>
    </div>
  )
}

export default FilterBtn