import React from "react";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  const contactMap = () => {
    return;
  };

  return (
    <div className="mb-10 mx-2 w-110 flex flex-col justify-center h-full mr-20">
      <h1 className="text-6xl font-semibold pb-2">Get in touch!</h1>
      <div
        className="flex flex-col justify-start my-2 
      h-52 bg-box p-5 border border-secondary bg-opacity-60"
      >
        <p>Here is </p>
        <div className="flex text-2xl text-head justify-start">
          <a
            className="py-2 px-2 border-2 border-secondary rounded-2xl
        text-white w-fit flex text-xl justify-evenly cursor-pointer hover:bg-opacity-20
        hover:bg-secondary hover:text-secondary font-bold my-3 mr-2"
          >
            <span className="text-3xl">
              <HiOutlineMail />
            </span>
          </a>
          <span className="text-3xl">
            <HiOutlineMail />
          </span>
          <span className="text-3xl">
            <HiOutlineMail />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
