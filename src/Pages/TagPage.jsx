import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tags = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs Tagged #<span>{tags}</span>
        </h2>
      </div>
      <Blog />
      <Pagination />
    </div>
  );
};

export default TagPage;
