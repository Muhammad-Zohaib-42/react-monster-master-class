import { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdSort } from "react-icons/md";
import { ClientContext } from "../contexts/ClientContext";

const FilterSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {setFilterQueryData} = useContext(ClientContext)!

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(prev => !prev)} className="flex items-center gap-2 border border-slate-800 rounded-md py-1 px-2 transition hover:bg-slate-800 select-none">
            <MdSort />
            <span>Filter</span>
            <IoIosArrowDown />
        </button>
        {
          isOpen &&
          <div className="absolute px-4 pt-3 pb-4 top-10 bg-slate-950 shadow-2xl border border-slate-800 rounded-lg flex flex-col gap-1.5">
            <div>
              <label className="text-[14px]" htmlFor="name">Filter By Name:</label>
              <input onChange={(e) => setFilterQueryData({name: 'name', query: e.target.value})} className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="name" name="name" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="category">Filter By Category:</label>
              <input onChange={(e) => setFilterQueryData({name: 'category', query: e.target.value})} className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="category" name="category" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="email">Filter By Email:</label>
              <input onChange={(e) => setFilterQueryData({name: 'email', query: e.target.value})} className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="email" name="email" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="project">Filter By Project:</label>
              <input onChange={(e) => setFilterQueryData({name: 'project', query: e.target.value})} className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="project" name="project" />
            </div>
            <div>
              <label className="text-[14px]" htmlFor="status">Filter By Status:</label>
              <input onChange={(e) => setFilterQueryData({name: 'status', query: e.target.value})} className="bg-slate-900 py-1 px-2 rounded outline-none" type="text" id="status" name="status" />
            </div>
          </div>
        }
    </div>
  )
}

export default FilterSelect