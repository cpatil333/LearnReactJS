import React, { useRef } from "react";

const RefForm = () => {
  const inputRef = useRef(null);

  function submit() {
    console.log(inputRef.current.value);
    console.log("submit");
  }
  return (
    <div className="w-screen flex flex-col items-center mt-10">
      <input ref={inputRef} type="text" placeholder="Enter Name.." />
      <br /> <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default RefForm;
