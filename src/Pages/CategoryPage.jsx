import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Header />
      <div className=" w-[30%] flex justify-between mt-[5.5rem] px-5 border">
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs on #<span>{category}</span>
        </h2>
      </div>
      <Blog margin={"mt-2"} />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
