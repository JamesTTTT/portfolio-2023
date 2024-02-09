import React, { useState, useEffect } from "react";
import { projects } from "../../data/data";
import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineRight,
  AiFillYoutube,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Projects = () => {
  const [selected, setSelected] = useState(projects[0]);

  useEffect(() => {
    const radios = document.getElementsByName("project");
    radios[0].checked = true;
  }, []);

  const projectMap = () => {
    return projects.map((item, index) => {
      return (
        <div key={index}>
          <input
            id={item.title}
            type="radio"
            name="project"
            value={item.title}
            className="peer hidden"
          />
          <label
            for={item.title}
            onClick={() => {
              setSelected(item);
            }}
            className="peer-checked:bg-secondary peer-checked:bg-opacity-20 py-2 px-2 border-b-2 border-secondary 
             hover:bg-opacity-20 transition-all hover:bg-secondary mr-2"
          >
            {item.title}
          </label>
        </div>
      );
    });
  };

  const techMap = () => {
    return selected.tech.map((item, index) => {
      return (
        <li key={index} className="my-2 mr-3">
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
    >
      <div className="mb-10 mx-2 w-110 flex flex-col justify-center h-full mr-20">
        <h1 className="pb-8 text-6xl font-semibold">
          What i have been working on...
        </h1>

        <div className="flex mb-4 w-full">{projectMap()}</div>
        <div className="bg-box p-5 border border-secondary bg-opacity-60">
          <img src={selected.img} alt="Screenshot of app" className="py-2" />
          <p
            className="text-md text-head h-80 max-h-80 overflow-y-scroll overflow-x-hidden scrollbar 
            scrollbar-thin-gray-900 scrollbar-track-gray-100 font-normal"
          >
            {selected.desc}
          </p>

          <ul className="flex text-secondary font-bold">{techMap()}</ul>

          <div className="flex justify-between">
            <div className="flex">
              <a
                href={selected.github}
                className="text-4xl my-2 p-2 cursor-pointer hover:text-secondary border-2 rounded-2xl
          hover:bg-secondary hover:bg-opacity-20 border-secondary"
              >
                <AiFillGithub />
              </a>
              <a
                href={selected.url}
                className="text-4xl p-2 my-2 mx-2 cursor-pointer hover:text-secondary border-2 rounded-2xl
           hover:bg-secondary hover:bg-opacity-20 border-secondary"
              >
                <AiOutlineLink />
              </a>
            </div>
            <a
              href={selected.video}
              className="text-4xl p-2 my-2 mx-2 cursor-pointer hover:text-secondary rounded-2xl
            hover:bg-opacity-20 "
            >
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
