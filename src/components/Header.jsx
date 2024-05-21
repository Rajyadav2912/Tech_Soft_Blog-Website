import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 bg-white w-full border shadow-md py-4 text-center">
      <NavLink to={"/"}>
        <h1 className="text-3xl font-bold uppercase">Tech-Soft Blogs</h1>
      </NavLink>
    </div>
  );
};

export default Header;
