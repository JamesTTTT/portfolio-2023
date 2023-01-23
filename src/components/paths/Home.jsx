import React, { useEffect, useState } from "react";
import { homeText } from "../../data/data";
import { AiFillGithub } from "react-icons/ai";
const Home = () => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeader(homeText.header.slice(0, header.length + 1));
    }, 80);

    return () => clearTimeout(timeout);
  }, [header]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBody(homeText.body.slice(0, body.length + 1));
    }, 20);
    return () => clearTimeout(timeout);
  }, [body]);

  return (
    <div className="w-96 max-w-96 mb-10 h-full cursor-default flex flex-col justify-start mr-20">
      <p className="text-xl text-secondary font-bold">About me: </p>
      <h1 className="text-5xl font-bold my-2 ">{header}</h1>
      <p className="text-2xl blinking-cursor font-semibold text-text ">
        {body}
      </p>
      <a
        className="py-2 px-2 border border-secondary rounded-lg
        text-white w-32 flex text-xl justify-evenly cursor-pointer hover:bg-opacity-20
        hover:bg-secondary hover:text-secondary font-bold my-3"
      >
        Github
        <span className="text-2xl ">
          <AiFillGithub />
        </span>
      </a>
    </div>
  );
};

export default Home;
