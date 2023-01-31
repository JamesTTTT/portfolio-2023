import React, { useState, useEffect } from "react";
import {
  Navigation,
  AnimatedRoutes,
  P5Wrap,
  LoadingScreen,
  Links,
} from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const logo = "<JT />";

  const [isLoading, setisLoading] = useState(true);

  if (isLoading) {
    return (
      <div>
        <LoadingScreen setisLoading={setisLoading} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen max-h-screen overflow-hidden">
      <div className="flex w-full h-full justify-center items-center overflow-hidden">
        <div
          id="insideFrame"
          className=" w-full font-roboto text-white
         h-full relative overflow-hidden"
        >
          <P5Wrap />
          <div className="absolute m-10">
            <h1 className="font-bold text-6xl ">{logo}</h1>
            <p className="p-2 text-2xl text-secondary">Fullstack Developer</p>
          </div>
          <div
            style={{ zIndex: 10 }}
            className="w-full p-4 z-10 h-full overflow-hidden"
          >
            <BrowserRouter>
              <div className="flex justify-between h-full items-center">
                <div className="mx-6">
                  <Navigation />
                </div>
                <div className="float-right flex flex-col justify-center h-full">
                  <AnimatedRoutes />
                </div>
                <div>
                  <Links />
                </div>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
