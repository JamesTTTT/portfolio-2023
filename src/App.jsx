import React from "react";
import { Home, Navigation } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden">
      <div className="flex w-full h-full justify-center items-center">
        <div className="border border-frenchblue w-11/12 p-3 font-roboto text-white h-5/6">
          <h1 className=" font-thin text-6xl">James Taylor</h1>
          <span className="p-2 text-xl">Fullstack Developer</span>

          <BrowserRouter>
            <div className="flex justify-between">
              <Navigation />

              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
