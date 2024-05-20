import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const TagPage = ({ tags }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const tags = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigator(-1)}>Back</button>
        <h2>
          Blogs Tagged #<span>{tags}</span>
        </h2>
      </div>
    </div>
  );
};

export default TagPage;
