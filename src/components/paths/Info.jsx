import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
const Info = () => {
  const competensList = () => {
    const content = [
      "Javascript",
      "Typescript",
      "React",
      "Node.js",
      "Python",
      "PHP",
    ];
    return content.map((item, index) => {
      return (
        <li
          key={index}
          className="text-text hover:text-secondary cursor-default flex"
        >
          <span className="text-secondary p-1 text-xs">
            <AiFillCaretRight />
          </span>
          {item}
        </li>
      );
    });
  };
  return (
    <div className="w-96 max-w-96 mb-10 h-full cursor-default flex flex-col justify-start mr-20">
      <ul className="grid grid-rows-3 grid-flow-col gap-1 my-4 font-semibold">
        {competensList()}
      </ul>
    </div>
  );
};

export default Info;
