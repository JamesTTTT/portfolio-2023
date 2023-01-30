import React, { useEffect, useState } from "react";
import { homeText } from "../../data/data";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Home = () => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeader(homeText.header.slice(0, header.length + 1));
    }, 20);

    return () => clearTimeout(timeout);
  }, [header]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBody(homeText.body.slice(0, body.length + 1));
    }, 5);
    return () => clearTimeout(timeout);
  }, [body]);

  return (
    <div className="mb-10 mx-2 w-110 flex flex-col justify-center mr-20 bg-main bg-opacity-50 h-fit">
      <p className="text-xl text-secondary font-bold">About me: </p>
      <h1 className="text-5xl font-bold my-2 ">{header}</h1>
      <p className="text-2xl blinking-cursor font-medium text-text ">{body}</p>
      <div className="flex ">
        <a
          className="py-2 px-2 border-2 border-secondary rounded-2xl
        text-white w-fit flex text-xl justify-evenly cursor-pointer hover:bg-opacity-20
        hover:bg-secondary hover:text-secondary font-bold my-3 mr-2"
        >
          <span className="text-4xl ">
            <AiFillGithub />
          </span>
        </a>
        <a
          className="py-2 px-2 border-2 border-secondary rounded-2xl
        text-white w-fit flex text-xl justify-evenly cursor-pointer hover:bg-opacity-20
        hover:bg-secondary hover:text-secondary font-bold my-3"
        >
          <span className="text-4xl ">
            <AiFillLinkedin />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
