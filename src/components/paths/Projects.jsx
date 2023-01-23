import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="flex mb-10">
        <button
          className="py-2 border-b-2 border-secondary mx-2 w-32
         hover:bg-secondary hover:bg-opacity-20 transition-all"
        >
          MyTaskScheduler
        </button>
        <button className="py-2 border-b-2 border-secondary mx-2 w-32">
          SparkRentals
        </button>
      </div>
    </div>
  );
};

export default Projects;
