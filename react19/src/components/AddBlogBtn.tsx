import { IoAddCircle } from "react-icons/io5"

const AddBlogBtn = () => {
  return (
    <button className="bg-slate-900 rounded-full text-sm text-slate-200 px-5 py-2 flex items-center gap-1 cursor-pointer">Add New Blog <IoAddCircle className="text-white" size={18} /></button>
  )
}

export default AddBlogBtn