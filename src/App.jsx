import React from "react";
import { Contact, Home, Info, Navigation, Projects } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden">
      <div className="flex w-full h-full justify-center items-center">
        <div className="border border-secondary w-11/12 p-4 font-roboto text-white h-5/6 max-h-5/6">
          <h1 className=" text-6xl">James Taylor</h1>
          <p className="p-2 text-2xl text-secondary">Fullstack Developer</p>

          <BrowserRouter>
            <div className="flex justify-between h-screen">
              <Navigation />

              <div className="float-right flex flex-col justify-end h-full">
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
  );
};

export default App;
