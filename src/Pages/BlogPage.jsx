import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseURL } from "../baseURL";
import Header from "../components/Header";
import Card from "../components/Card";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  const newUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);

    let url = `${newUrl}get-blog?blogId=${blogId}`;

    console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);

      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.error(error);
      console.log("Error in fetching data", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Header />
      <div className="my-[100px]">
        <div className="flex items-center gap-x-4 mb-5">
          <button
            onClick={() => navigation(-1)}
            className="rounded-md shadow-lg  border border-black shadow-gray-400 px-4 py-1"
          >
            Back
          </button>
        </div>
        {loading ? (
          <div>
            <p>Loading</p>
          </div>
        ) : blog ? (
          <div className="w-[90vw] mx-auto">
            <div className="max-w-[770px border border-black rounded-lg">
              <Card
                id={blog.id}
                img={blog.img}
                post={blog}
                title={blog.title}
                author={blog.author}
                category={blog.category}
                date={blog.date}
                content={blog.content}
                tags={blog.tags}
              />
            </div>

            <div className="w-[85vw mx-auto">
              <h2 className="max-w-[15rem] mx-auto font-bold text-center text-3xl my-5">
                Related Blog
              </h2>
              <div className="w-full flex flex-wrap justify-between gap-y-10">
                {relatedblogs.map((post) => (
                  <div className="max-w-[670px] mx-auto border hover: border-black rounded-lg">
                    <Card
                      key={post.id}
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
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
