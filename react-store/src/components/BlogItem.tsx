import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

type BlogItemProps = {
    title: string,
    author: string,
    commentsCount: number,
    likes: number
}

const BlogItem = ({title, author, commentsCount, likes}: BlogItemProps) => {
  return (
    <li>
        <h3 className="font-semibold">{title}</h3>
        <p>Publish by {author}</p>
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-0.5">
                <FaRegComment />
                <p>{commentsCount}</p>
            </div>
            <div className="flex items-center gap-0.5">
                <BiLike />
                <p>{likes}</p>
            </div>
        </div>
    </li>
  )
}

export default BlogItem