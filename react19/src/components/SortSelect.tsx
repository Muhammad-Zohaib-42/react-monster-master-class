import { useContext, useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { ClientContext } from "../contexts/ClientContext";
import { MdOutlineSportsRugby } from "react-icons/md";

const SortSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<string | null>(null)
  
  const {setClientsData} = useContext(ClientContext)!

  useEffect(() => {
    function sortClientsData() {
        setClientsData((prev) => [...prev].sort((a,b) => a[sortBy].localeCompare(b[sortBy])))
    }

    if (sortBy) {
        sortClientsData()
    }
  }, [sortBy])

  return (
    <div className="relative">
        <button onClick={() => setIsOpen(prev => !prev)} className="flex items-center gap-2 border border-slate-800 rounded-md py-1 px-2 transition hover:bg-slate-800">
            <BiSort />
            <span>Sort</span>
            <IoIosArrowDown />
        </button>
        {
            isOpen && 
            <div className="absolute w-full top-10 left-0">
                <ul className="bg-slate-950 w-full shadow-2xl border border-slate-800 rounded-lg flex flex-col py-1">
                    <li onClick={() => setSortBy('name')} className="transition hover:bg-slate-800 px-3 cursor-pointer py-1">Name</li>
                    <li onClick={() => setSortBy('country')} className="transition hover:bg-slate-800 px-3 cursor-pointer py-1">Country</li>
                    <li onClick={() => setSortBy('date')} className="transition hover:bg-slate-800 px-3 cursor-pointer py-1">Date</li>
                </ul>
            </div>
        }
    </div>
  )
}

export default SortSelect