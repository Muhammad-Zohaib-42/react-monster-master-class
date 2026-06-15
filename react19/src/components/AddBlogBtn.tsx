import { IoAddCircleOutline } from "react-icons/io5"

const AddBlogBtn = () => {
  return (
    <button className="bg-slate-900 rounded-full mt-2 text-slate-200 px-3 py-1.5 flex items-center gap-1 cursor-pointer">Add New Blog <IoAddCircleOutline className="text-gray-50" size={20} /></button>
  )
}

export default AddBlogBtn