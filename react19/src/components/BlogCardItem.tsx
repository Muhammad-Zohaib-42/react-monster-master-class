import type { FC } from "react"
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa"

type BlogCardItemProps = {
    id: number,
    imgSrc: string,
    title: string,
    description: string,
    date: string
}

const BlogCardItem: FC<BlogCardItemProps> = ({id, imgSrc, title, description, date}) => {
  return (
    <li className="px-3 py-3 shadow-lg rounded-md border border-slate-100 flex gap-4">
        <div className="h-20 w-30 rounded-md overflow-hidden">
            <img className="h-full w-full object-cover" src={imgSrc} alt="" />
        </div>
        <div className="flex flex-col justify-between">
            <div>
                <h2 className="text-lg font-semibold leading-5">{title}</h2>
                <p className="text-gray-600 text-[16px]">{description}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">{date}</p>
                <div className="flex items-center gap-1.5">
                    <button className="cursor-pointer">
                        <FaBookmark className="text-gray-500" size={14} />
                    </button>
                    <button className="cursor-pointer">
                        <FaEdit className="text-blue-600" size={14} />
                    </button>
                    <button className="cursor-pointer">
                        <FaTrash className="text-red-600" size={14} />
                    </button>
                </div>
            </div>
        </div>
    </li>
  )
}

export default BlogCardItem