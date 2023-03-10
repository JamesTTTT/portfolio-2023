import React, { useEffect, useState } from "react";
import { homeText } from "../../data/data";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
const Home = () => {
  const [body, setBody] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBody(homeText.body.slice(0, body.length + 1));
    }, 5);
    return () => clearTimeout(timeout);
  }, [body]);

  return (
    <motion.div
      initial={{
        y: window.innerHeight,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.7 } }}
    >
      <div className="mb-10 mx-2 max-w-110 w-110 flex flex-col justify-center mr-20 bg-main bg-opacity-50 h-full md:w-full">
        <p className="text-xl text-secondary font-bold">About me: </p>
        <h1 className="text-5xl font-bold my-2 md:text-2xl">
          {homeText.header}
        </h1>
        <p className="text-2xl blinking-cursor font-medium text-text md:text-xl">
          {body}
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
