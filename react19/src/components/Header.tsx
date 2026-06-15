import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-b-slate-300 px-10 py-3">
        <input className="border border-slate-400 py-1 px-3 rounded-full" type="text" name="search" placeholder="Search..." />
        <button className="cursor-pointer">
            <FaUserCircle size={22} />
        </button>
    </header>
  )
}

export default Header