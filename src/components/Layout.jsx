import Hero from "./Hero";
import About from "./About";
import { useState } from "react";

const Layout = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full h-[20vh bg-gray-400 p-[2rem]">
      <h2>Layout</h2>
      <Hero data={props.data} count={5} />
      <About data={props.data} count={4} />
    </div>
  );
};

export default Layout;
