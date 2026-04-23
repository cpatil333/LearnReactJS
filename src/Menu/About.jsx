import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1 className="text-4xl">About</h1>
      {Outlet}
      <div className="bg-red-300 w-40 h-40">Test</div>
    </div>
  );
};

export default About;
