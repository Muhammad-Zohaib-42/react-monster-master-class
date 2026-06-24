import BlogItem from "./BlogItem"

type Blog = {
    id: number,
    title: string,
    author: string,
    commentsCount: number,
    likes: number
}

const BlogsSection = () => {
  const blogs: Blog[] = [
    {
        id: 1,
        title: "My Amazing Blog Title 1",
        author: "Jordan",
        commentsCount: 142,
        likes: 44
    },
    {
        id: 2,
        title: "My Amazing Blog Title 2",
        author: "John",
        commentsCount: 158,
        likes: 25
    },
    {
        id: 3,
        title: "My Amazing Blog Title 3",
        author: "HuXn",
        commentsCount: 50,
        likes: 14
    }
  ]

  return (
    <div className="border border-slate-300 py-2 px-3">
        <h2 className="section-title mb-3">Popular Blogs</h2>
        <ul className="flex flex-col gap-3">
            {
                blogs.map(blog => <BlogItem key={blog.id} title={blog.title} author={blog.author} commentsCount={blog.commentsCount} likes={blog.likes} />)
            }
        </ul>
    </div>
  )
}

export default BlogsSection