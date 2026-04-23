import React, { useEffect } from "react";
import useMyStore from "./store";
import { VscSymbolNamespace } from "react-icons/vsc";

const Home = () => {
  //const { count, increment, capitalizeWord } = useMyStore();
  const count = useMyStore((state) => state.count);
  const name = useMyStore((state) => state.name);
  const increment = useMyStore((state) => state.increment);
  const capitalizeWord = useMyStore((state) => state.capitalizeWord);

  useEffect(() => {
    console.log("Re-render", count);
  });
  return (
    <div className="flex flex-col m-auto w-[20rem] mt-10">
      Home
      <br />
      count :{count}
      <br />
      name : {name}
      <button
        onClick={increment}
        className="rounded-xl broder-red-500 bg-red-500 text-black p-2 w-[8rem] mt-10"
      >
        Increment
      </button>
      <button
        onClick={capitalizeWord}
        className="rounded-xl broder-red-500 bg-red-500 text-black p-2 w-[8rem] mt-10"
      >
        Capitalize
      </button>
    </div>
  );
};

export default Home;
