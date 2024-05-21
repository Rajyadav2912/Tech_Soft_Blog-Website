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
      <div className="my-[100px]">
        <div className=" w-[45%] mx-auto flex items-center gap-x-4 px-5">
          <button
            onClick={() => navigation(-1)}
            className="rounded-md border border-black shadow-lg shadow-gray-400  px-4 py-1"
          >
            Back
          </button>
          <h2 className="text-[20px] font-bold">
            Blogs on <span className="text-blue-600 underline">{category}</span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Blog />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
