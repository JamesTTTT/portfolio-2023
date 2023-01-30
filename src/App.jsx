import React, { useState, useEffect } from "react";
import {
  Navigation,
  AnimatedRoutes,
  P5Wrap,
  LoadingScreen,
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
      <div className="flex w-full h-full justify-center items-center">
        <div
          id="insideFrame"
          className="border border-secondary w-11/12 font-roboto text-white
         h-5/6 max-h-5/6 relative overflow-scroll"
        >
          <P5Wrap />

          <div
            style={{ zIndex: 10 }}
            className="w-full p-4 z-10 h-full overflow-hidden"
          >
            <BrowserRouter>
              <div className="flex justify-between h-full ">
                <div>
                  <h1 className="font-bold text-6xl">{logo}</h1>
                  <p className="p-2 text-2xl text-secondary">
                    Fullstack Developer
                  </p>

                  <Navigation />
                </div>
                <div className="float-right flex flex-col justify-center h-full">
                  <AnimatedRoutes />
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
