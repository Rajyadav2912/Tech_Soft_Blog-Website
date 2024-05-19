import React from "react";

const Tags = ({ tags, id }) => {
  console.log(tags);
  return (
    <div
      className="text-blue-700 text-[12px] font-bold underline mt-[5px] cursor-pointer"
      key={id}
    >
      #{tags}
    </div>
  );
};

export default Tags;
