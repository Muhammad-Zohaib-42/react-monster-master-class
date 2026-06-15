import { useContext } from "react"
import { IoAddCircle } from "react-icons/io5"
import { BlogContext } from "../contexts/BlogContext"

const AddBlogBtn = () => {
  const {toggleModal} = useContext(BlogContext)

  return (
    <button onClick={toggleModal} className="bg-green-600 rounded-full text-sm text-slate-200 px-5 py-2 flex items-center gap-1 cursor-pointer">Add New Blog <IoAddCircle className="text-white" size={18} /></button>
  )
}

export default AddBlogBtn