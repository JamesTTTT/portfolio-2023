import React, { useEffect, useState } from "react";

const LoadingScreen = ({ setisLoading }) => {
  const jtRaw = "<JT />";

  const [jt, setJt] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setisLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setJt(jtRaw.slice(0, jt.length + 1));
      console.log(jtRaw.length);
    }, 100);

    return () => clearTimeout(timeout);
  }, [jt]);

  return (
    <div className="flex justify-center align-middle h-screen w-full items-center">
      <h1 className="text-9xl text-head font-bold blinking-cursor md:text-4xl">
        {jt}
      </h1>
    </div>
  );
};

export default LoadingScreen;
