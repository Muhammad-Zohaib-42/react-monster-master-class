import { FaFolder, FaUser } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

const DashboardSidebar = () => {
  return (
    <aside className="h-screen fixed left-0 w-20 flex flex-col items-center py-5 gap-8 border-r border-r-slate-800">
        <h2>Clients</h2>
        <button className="cursor-pointer">
            <FaFolder size={20} />
        </button>
        <button className="cursor-pointer">
            <FaUser size={20} />
        </button>
        <button className="cursor-pointer">
            <FaGear size={20} />
        </button>
    </aside>
  )
}

export default DashboardSidebar