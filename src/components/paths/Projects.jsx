import React, { useState, useEffect } from "react";
import { projects } from "../../data/data";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const [selected, setSelected] = useState(projects[0]);

  useEffect(() => {
    const radios = document.getElementsByName("project");
    radios[0].checked = true;
  }, []);

  const projectMap = () => {
    return projects.map((item, index) => {
      return (
        <div key={index} className=" w-full">
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
             hover:bg-opacity-20 transition-all hover:px-4 mr-2"
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
    <div className="mb-10 mx-2 w-110 flex flex-col justify-center h-full mr-20">
      <h1 className="pb-8 text-6xl font-semibold">
        What i have been working on
      </h1>

      <div className="flex mb-4 justify-center w-fit">{projectMap()}</div>
      <div className="bg-box p-5 border border-secondary">
        <p
          className="text-xl text-head max-h-80 overflow-scroll
         scrollbar-thumb-blue-400 font-normal"
        >
          {selected.desc}
        </p>

        <ul className="flex text-secondary font-bold">{techMap()}</ul>

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
      </div>
    </div>
  );
};

export default Projects;
