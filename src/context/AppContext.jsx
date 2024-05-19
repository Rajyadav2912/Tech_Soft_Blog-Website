import { createContext, useState } from "react";
import { baseURL } from "../baseURL";

// step 1 : create context
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //   data fillin pending

  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseURL}?page=${page}`;
    // process.env.
    if (tag) {
      url += `&tag=${tag}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    try {
      const result = await fetch(url);
      const data = await result.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something went wrong");
      console.log("Api Response", data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      //
    } catch (error) {
      console.log("Error in fetching data", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogPosts(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // step 2 : context provide karna
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
