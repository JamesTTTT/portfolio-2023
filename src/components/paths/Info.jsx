import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { skills } from "../../data/data";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
import { aboutMe } from "../../data/data";
const Info = () => {
  const competensList = () => {
    return skills.map((item, index) => {
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
    <motion.div
      initial={{
        y: window.innerHeight,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.7 } }}
      className=" max-w-110 w-110 overflow-hidden mb-10 h-full cursor-default flex flex-col justify-center mr-20 "
    >
      <div className="h-fit bg-main bg-opacity-50">
        <h1 className="pb-8 text-6xl font-semibold opa">About me</h1>
        <div className="flex">
          <div className="w-1/2">
            <p className="px-2 text-2xl font-medium text-head">
              {aboutMe.header}
            </p>
            <p className="p-3 font-medium text-text">{aboutMe.body}</p>
          </div>
          <div className="w-1/2 ">
            <img
              className="rounded-2xl w-52 hover:shadow-lg border-2 border-secondary hover:border-head
               hover:scale-110 transition duration-300 ease-in-out opacity-80 hover:opacity-100"
              src={me}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium text-head">Skills</h2>
          <ul className="grid grid-rows-3 grid-flow-col gap-1 my-4 font-semibold">
            {competensList()}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
