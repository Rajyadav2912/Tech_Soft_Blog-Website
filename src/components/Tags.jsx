import React from "react";

const Tags = ({ tags, id }) => {
  return (
    <div
      className="text-blue-700 text-[12px] font-bold mt-[5px] cursor-pointer"
      key={id}
    >
      #<span className="hover:underline">{tags}</span>
    </div>
  );
};

export default Tags;
