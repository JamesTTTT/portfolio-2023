import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { about, education, experience, skills } from "../../data/data";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";
import { aboutMe } from "../../data/data";

const Skills = () => {
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
    <div>
      <ul className="grid grid-rows-3 grid-flow-col gap-1 my-4 font-semibold">
        {competensList()}
      </ul>
    </div>
  );
};

const Expirence = () => {
  const expirenceList = () => {
    return experience.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.desc}</p>
        </div>
      );
    });
  };

  return <div>{expirenceList()}</div>;
};

const Education = () => {
  return (
    <div>
      <p>{education.title}</p>
      <p>{education.desc}</p>
    </div>
  );
};

const Info = () => {
  const [draw, setDraw] = useState("Skills");
  const draws = () => {
    return about.map((item, index) => {
      return (
        <div key={index} className="w-full">
          <input
            id={item.title}
            type="radio"
            name="project"
            value={item.title}
            className="peer hidden "
            onClick={(e) => {
              setDraw(e.target.value);
              console.log(e.target.value);
            }}
          />
          <label
            for={item.title}
            value={item.title}
            className="peer-checked:bg-secondary peer-checked:bg-opacity-20 py-2 px-2 border-b-2 border-secondary 
         hover:bg-opacity-20 transition-all hover:px-4 mr-2"
          >
            {item.title}
          </label>
        </div>
      );
    });
  };

  const drawContent = () => {
    if (draw === "Skills") {
      return <Skills />;
    } else if (draw === "Experience") {
      return <Expirence />;
    } else if (draw === "Education") {
      return <Education />;
    }
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
          <div className="w-1/2">
            <img
              className="rounded-2xl w-52 hover:shadow-lg border-2 border-secondary hover:border-head
               hover:scale-110 transition duration-300 ease-in-out opacity-80 hover:opacity-100"
              src={me}
            />
          </div>
        </div>
        <div>
          <div className="flex mt-4 mb-7 justify-center w-fit">{draws()}</div>

          {drawContent()}
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
