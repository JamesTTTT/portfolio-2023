import React from "react";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="mb-10 mx-2 w-110 flex flex-col justify-center h-full mr-20">
      <h1 className="text-6xl font-semibold pb-2">Get in touch</h1>
      <div className="flex flex-col justify-center my-2">
        <p>Here is </p>
        <p className="flex text-2xl text-head">
          {/* <span className="text-4xl">
            <HiOutlineMail />
          </span> */}
          Email: taylormarkaryd@gmail.com
        </p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Contact;
