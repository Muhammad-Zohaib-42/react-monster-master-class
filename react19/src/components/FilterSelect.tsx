import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSort } from "react-icons/md";

const FilterSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(prev => !prev)} className="flex items-center gap-2 border border-slate-800 rounded-md py-1 px-2 transition hover:bg-slate-800">
            <MdSort />
            <span>Filter</span>
            <IoIosArrowDown />
        </button>
        {
          isOpen &&
          <div className="absolute px-4 pt-3 pb-4 top-10 bg-slate-950 shadow-2xl border border-slate-800 rounded-lg flex flex-col gap-1.5">
            <div>
              <label className="text-[14px]" htmlFor="name">Filter By Name:</label>
              <input className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="name" name="name" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="category">Filter By Category:</label>
              <input className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="category" name="category" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="email">Filter By Email:</label>
              <input className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="email" name="email" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="project">Filter By Project:</label>
              <input className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="project" name="project" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="status">Filter By Status:</label>
              <input className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="status" name="status" />
            </div>
          </div>
        }
    </div>
  )
}

export default FilterSelect