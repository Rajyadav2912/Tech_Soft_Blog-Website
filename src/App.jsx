import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import TagPage from "./components/TagPage";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Header />
      <Blog />
      <Pagination />
    </div>
    // <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
    //   <Routes>
    //     <Route path="/" element={<Header />} />
    //     <Route path="/blog/:blogId" element={<Blog />} />
    //     <Route path="/tags/:tag" element={<TagPage />} />
    //     <Route path="/categories/:category" element={<CategoryPage />} />
    //   </Routes>
    //   <Pagination />
    // </div>
  );
};

export default App;
