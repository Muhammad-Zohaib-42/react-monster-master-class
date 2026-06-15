import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

export type Blog = {
    id: number,
    imgSrc: File | undefined,
    title: string,
    description: string,
    date: string
}

type BlogContextType = {
    isModalOpen: boolean,
    toggleModal: () => void,
    blogs: Blog[] | [],
    setBlogs: Dispatch<SetStateAction<Blog[] | []>>,
    editingBlog: number | null,
    setEditingBlog: Dispatch<SetStateAction<null>>,
    title: string,
    description: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
}

type BlogProviderProps = {
    children: ReactNode
}

export const BlogContext = createContext<BlogContextType | null>(null)

export const BlogProvider = ({children}: BlogProviderProps) => {
    const [isModalOpen,setIsModalOpen] = useState(true)
    const [blogs, setBlogs] = useState<Blog[] | []>([])
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