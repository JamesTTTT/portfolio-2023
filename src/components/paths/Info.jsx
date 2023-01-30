import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { skills } from "../../data/data";
import { motion } from "framer-motion";
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
      className="w-96 max-w-96 mb-10 h-full cursor-default flex flex-col justify-start mr-20"
    >
      <ul className="grid grid-rows-3 grid-flow-col gap-1 my-4 font-semibold">
        {competensList()}
      </ul>
    </motion.div>
  );
};

export default Info;
