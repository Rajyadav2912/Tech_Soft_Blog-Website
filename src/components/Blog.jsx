import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import Card from "./Card";
import Spinner from "./Spinner";
import Card from "./Card";

const Blog = () => {
  // consume data
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 py-4 flex flex-wrap gap-7 mt-2 justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div className="max-w-[670px] rounded-lg border border-black">
              <Card
                id={post.id}
                img={post.img}
                post={post}
                title={post.title}
                author={post.author}
                category={post.category}
                date={post.date}
                content={post.content}
                tags={post.tags}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blog;
