import React, { useEffect, useState } from "react";
import { homeText } from "../../data/data";
import { AiFillCaretRight } from "react-icons/ai";
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
    <div className="w-96 max-w-96 m-20 h-full cursor-default">
      <p className="text-xl text-secondary font-bold">About me: </p>
      <h1 className="text-5xl font-bold my-2 ">{header}</h1>
      <p className="text-2xl blinking-cursor font-semibold text-text ">
        {body}
      </p>

      <ul className="grid grid-rows-3 grid-flow-col gap-1 my-4 font-semibold">
        {competensList()}
      </ul>
    </div>
  );
};

export default Home;
