import { BsFilterRight } from "react-icons/bs";
import DropdownItem from "./DropdownItem";
import { useContext, type MouseEvent } from "react";
import { StoreContext } from "../contexts/StoreContext";

const FilterBtn = () => {
  const options: string[] = ['Cheap', 'Expensive', 'Popular']

  const {isFilterMenuOpen, setIsFilterMenuOpen} = useContext(StoreContext)!

  function filterMenuToggleHandler(e: MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation()

    setIsFilterMenuOpen(!isFilterMenuOpen)
  }

  return (
    <div className="relative mb-4">
        <button onClick={filterMenuToggleHandler} className="px-2 py-1 border border-slate-300 transition hover:bg-slate-200 flex items-center gap-1">
            <BsFilterRight size={25} />
            <span className="font-semibold">Filter</span>
        </button>
        <ul className="absolute left-0 top-[120%] border border-slate-300 w-[120px] py-1 bg-slate-100" style={{display: isFilterMenuOpen ? "block" : "none"}}>
            {
                options.map((option, index) => <DropdownItem key={index} option={option} />)
            }
        </ul>
    </div>
  )
}

export default FilterBtn