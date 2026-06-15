import { useContext, useRef, type FormEvent } from "react"
import { createPortal } from "react-dom"
import { FaX } from "react-icons/fa6"
import { BlogContext, type Blog } from "../contexts/BlogContext"
import { FaUpload } from "react-icons/fa"

const Modal = () => {
    const {toggleModal, isModalOpen, setBlogs, editingBlog, setEditingBlog, title, description, setTitle, setDescription} = useContext(BlogContext)!

    const imageInputRef = useRef<HTMLInputElement | null>(null)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (editingBlog) {
            setBlogs(prev => prev.map((blog): Blog => {
                if (blog.id == editingBlog) {
                    return {
                        ...blog,
                        title,
                        description,
                        imgSrc: imageInputRef.current?.files?.[0] ? imageInputRef.current.files[0] : blog.imgSrc
                    }
                } else {
                    return blog
                }
            }))
            setEditingBlog(null)
        } else {
            const blog = {
                id: Date.now(),
                title,
                description,
                date: new Date().toLocaleDateString(),
                imgSrc: imageInputRef.current?.files?.[0]
            }
    
            setBlogs(prev => [...prev, blog])
        }

        toggleModal()
    }

  return createPortal(
    <div className="fixed inset-0 bg-gray-900/80 grid place-content-center" hidden={isModalOpen}>
        <div className="px-5 pt-4 pb-5 rounded-lg flex flex-col gap-1.5 bg-gray-300 relative w-100">
            <button onClick={toggleModal} className="cursor-pointer absolute top-4 right-4">
                <FaX className="text-gray-600" size={14} />
            </button>
            <h2 className="text-xl mb-2 font-semibold">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="outline-none border border-gray-400 px-2 py-1.5 rounded" type="text" name="title" id="title" placeholder="Enter title" required />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description">Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} rows={6} className="resize-none outline-none border border-gray-400 px-2 py-1.5 rounded" name="description" id="description" placeholder="Enter description" required></textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="cursor-pointer flex items-center justify-center gap-2 px-2 py-1.5 rounded border border-gray-400 text-gray-700" htmlFor="image">Upload Image <FaUpload size={12} /></label>
                    <input ref={imageInputRef} hidden type="file" name="image" id="image" required />
                </div>
                <button className="bg-gray-700 text-gray-200 px-3 py-2 mt-2 rounded cursor-pointer transition hover:bg-gray-900">{editingBlog ? "Save Blog" : "Add Blog"}</button>
            </form>
        </div>
    </div>,
    document.getElementById("modal-root")!
  )
}

export default Modal