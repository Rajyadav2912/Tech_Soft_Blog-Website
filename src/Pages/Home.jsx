import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Header />
      <div className="flex flex-col my-[80px] items-center justify-center">
        <Blog />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
