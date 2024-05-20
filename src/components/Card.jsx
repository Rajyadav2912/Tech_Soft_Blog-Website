import React from "react";
import Tags from "./Tags";

const Card = ({ id, title, author, date, category, content, tags, img }) => {
  return (
    <div
      key={id}
      className="border border-black p-5 rounded-lg shadow-md shadow-gray-600"
    >
      <div className="flex items-center gap-5">
        <img src={img} alt="" className="rounded-full" />
        <div>
          <p className="font-bold text-lg cursor-pointer">{title}</p>
          <p className="text-md">
            📝 By <span className="italic mt-[4px]">{author}</span> on
            <span> {category}</span>
          </p>
          <p className="text-md mt-[4px]">
            📅 <strong>Posted on</strong> {date}
          </p>
        </div>
      </div>

      <p className="text-[15px] mt-[14px] text-justify">{content}</p>

      <div className="flex gap-x-2">
        {tags.map((tag, index) => {
          return (
            <div className="">
              <Tags tags={tag} id={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
