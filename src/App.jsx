import React from "react";
import {
  Contact,
  Home,
  Info,
  Navigation,
  Projects,
  P5Wrap,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
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
                  <h1 className=" text-6xl">James Taylor</h1>
                  <p className="p-2 text-2xl text-secondary">
                    Fullstack Developer
                  </p>

                  <Navigation />
                </div>
                <div className="float-right flex flex-col justify-center h-full">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
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
