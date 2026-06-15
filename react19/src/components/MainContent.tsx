import { useContext, useState } from "react";
import AddBlogBtn from "./AddBlogBtn";
import BlogCardItem from "./BlogCardItem";
import { BlogContext } from "../contexts/BlogContext";

const MainContent = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="grow px-10 py-4">
      <AddBlogBtn />
      <ul className="grid grid-cols-2 gap-3 mt-5">
        {blogs.length < 1 ? <h2>No Blogs Yet</h2> : blogs.map(({ id, title, description, imgSrc, date }) => (
          <BlogCardItem
            key={id}
            id={id}
            title={title}
            description={description}
            imgSrc={imgSrc}
            date={date}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
