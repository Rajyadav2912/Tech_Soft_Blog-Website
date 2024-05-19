import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import Card from "./Card";
import Spinner from "./Spinner";

const Blog = () => {
  // consume data
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-4 flex flex-col gap-y-7 my-16 justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg cursor-pointer">{post.title}</p>
            <p className="text-md">
              By <span className="italic mt-[4px]">{post.author}</span> on
              <span> {post.category}</span>
            </p>
            <p className="text-md mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    className="text-blue-700 text-sm font-bold underline mt-[5px] cursor-pointer"
                    key={index}
                  >
                    #{tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
