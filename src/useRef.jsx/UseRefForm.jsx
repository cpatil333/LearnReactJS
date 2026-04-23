import React, { useRef } from "react";

const UseRefForm = () => {
  const divRef = useRef();
  const inputRef = useRef();
  const handleClick = () => {
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.borderRadius = "100%";
    divRef.current.click();
    inputRef.current.focus();
  };
  return (
    <div className="flex flex-col w-screen mt-10">
      <div
        ref={divRef}
        onClick={() => alert("hi")}
        className="w-[14rem] h-[14rem] bg-red-500"
      ></div>
      <input type="text" ref={inputRef} className="w-[10rem] float-right" />
      <button onClick={handleClick} className="border-white">
        Click
      </button>
    </div>
  );
};

export default UseRefForm;
