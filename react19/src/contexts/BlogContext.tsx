import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type Blog = {
    id: number,
    imgSrc: string,
    title: string,
    description: string,
    date: string
}

type BlogContextType = {
    isModalOpen: boolean,
    toggleModal: () => void,
    blogs: Blog[],
    setBlogs: Dispatch<SetStateAction<never[]>>,
    editingBlog: number | null,
    setEditingBlog: Dispatch<SetStateAction<null>>,
    title: string,
    description: string,
    setTitle: Dispatch<SetStateAction<null>>,
    setDescription: Dispatch<SetStateAction<null>>,
}

type BlogProviderProps = {
    children: ReactNode
}

export const BlogContext = createContext<BlogContextType | null>(null)

export const BlogProvider = ({children}: BlogProviderProps) => {
    const [isModalOpen,setIsModalOpen] = useState(true)
    const [blogs, setBlogs] = useState([])
    const [editingBlog, setEditingBlog] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function toggleModal() {
        setIsModalOpen(prev => !prev)
    }

    return <BlogContext.Provider value={{isModalOpen, toggleModal, blogs, setBlogs, editingBlog, setEditingBlog, title, setTitle, description, setDescription}}>
        {children}
    </BlogContext.Provider>
}