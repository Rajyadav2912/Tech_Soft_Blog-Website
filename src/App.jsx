import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Pagination from "./components/Pagination";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import BlogPage from "./Pages/BlogPage";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      // its mean to show our tags page
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    // <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
    //   <Header />
    //   <Blog />
    //   <Pagination />
    // </div>
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
      <Pagination />
    </div>
  );
};

export default App;
