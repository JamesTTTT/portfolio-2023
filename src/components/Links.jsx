import React from "react";
import { links } from "../data/data";

const Links = () => {
  const linklist = () => {
    return links.map((item, index) => {
      return (
        <a
          key={index}
          href={item.link}
          className="border-2 border-secondary rounded-2xl max-w-16 w-16 h-16
text-white flex text-xl justify-center cursor-pointer hover:bg-opacity-20
hover:bg-secondary hover:text-secondary font-normal my-3 mr-2 transition-all items-center"
        >
          <span className="text-4xl ">{item.icon}</span>
        </a>
      );
    });
  };
  return (
    <div className="flex flex-col justify-end items-end">{linklist()}</div>
  );
};

export default Links;
