import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { contactText } from "../../data/data";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
      initial={{
        y: window.innerHeight,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.7 } }}
      className="mb-10 mx-2 max-w-110 w-110 flex flex-col justify-center h-full mr-20"
    >
      <h1 className="text-6xl font-semibold pb-2">{contactText.header}</h1>
      <div className="flex flex-col text-2xl text-head justify-start bg-main bg-opacity-50">
        <p>{contactText.body}</p>
        <a
          href="mailto:taylormarkaryd@gmail.com"
          className="py-2 px-2 border-2 border-secondary rounded-2xl
        text-white w-fit flex justify-evenly cursor-pointer hover:bg-opacity-20
        hover:bg-secondary hover:text-secondary font-bold my-3 mr-2 transition"
        >
          <p className="px-2 text-2xl">Email Me!</p>
          <span className="text-3xl px-2">
            <HiOutlineMail />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
