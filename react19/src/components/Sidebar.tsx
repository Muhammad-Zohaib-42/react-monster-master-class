import { FaDownload, FaHome, FaMoon, FaSun, FaUser } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

const Sidebar = () => {
  return (
    <aside className="w-20 h-screen fixed left-0 border-r border-r-slate-200 flex flex-col items-center justify-between px-2 py-5">
        <div className="flex flex-col gap-5">
            <button className="cursor-pointer">
                <FaHome size={20} />
            </button>
            <button className="cursor-pointer">
                <FaUser size={20} />
            </button>
            <button className="cursor-pointer">
                <FaDownload size={20} />
            </button>
        </div>
        <div className="flex flex-col gap-5">
            <button className="cursor-pointer">
                <FaGear size={20} />
            </button>
            <button className="cursor-pointer">
                <FaSun className="hidden" size={20} />
                <FaMoon size={20} />
            </button>
        </div>
    </aside>
  )
}

export default Sidebar