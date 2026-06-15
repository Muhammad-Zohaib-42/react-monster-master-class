import { useContext, type FC } from "react"
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa"
import { BlogContext } from "../contexts/BlogContext"

type BlogCardItemProps = {
    id: number,
    imgSrc: string,
    title: string,
    description: string,
    date: string
}

const BlogCardItem: FC<BlogCardItemProps> = ({id, imgSrc, title, description, date}) => {
    const {blogs, setBlogs, toggleModal, setEditingBlog, setTitle, setDescription} = useContext(BlogContext)

    function handleDeleteBlog() {
        setBlogs(prev => prev.filter(blog => blog.id !== id))
    }

    function handleEditBlog() {
        setEditingBlog(id)
        setTitle(title)
        setDescription(description)
        toggleModal()
    }
  return (
    <li className="px-3 py-3 rounded-md border border-gray-200 flex gap-4">
        <div className="h-20 w-30 shrink-0 rounded-md overflow-hidden">
            <img className="h-full w-full object-cover" src={URL.createObjectURL(imgSrc)} alt="" />
        </div>
        <div className="flex flex-col justify-between grow">
            <div>
                <h2 className="text-lg font-semibold leading-5">{title}</h2>
                <p className="text-gray-600 text-[14px] leading-4 mt-1 mb-3">{description}</p>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="text-gray-500 text-sm">{date}</p>
                <div className="flex items-center gap-1.5">
                    <button className="cursor-pointer">
                        <FaBookmark className="text-gray-500" size={14} />
                    </button>
                    <button onClick={handleEditBlog} className="cursor-pointer">
                        <FaEdit className="text-blue-600" size={14} />
                    </button>
                    <button onClick={handleDeleteBlog} className="cursor-pointer">
                        <FaTrash className="text-red-600" size={14} />
                    </button>
                </div>
            </div>
        </div>
    </li>
  )
}

export default BlogCardItem