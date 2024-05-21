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
  const [loading, setloading] = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setloading(true);

    let url = `${baseURL}?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);

      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.error(error);
      console.log("Error in fetching data", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setloading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : blog ? (
        <div>
          <Card />
          <h2>Related Blog</h2>
          
          {relatedblogs.map((post) => {
            <div key={post.id}>
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
            </div>;
          })}
        </div>
      ) : (
        <div>
          <p>No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
