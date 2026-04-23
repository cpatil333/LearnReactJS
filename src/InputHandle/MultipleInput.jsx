import React, { useState } from "react";

const MultipleInput = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function clearInput() {
    setData({ name: "", email: "" });
  }
  return (
    <div className="w-screen flex flex-col items-center mt-10">
      <input
        type="text"
        name="name"
        placeholder="Enter name..."
        value={data.name}
        onChange={inputHandler}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter email..."
        value={data.email}
        onChange={inputHandler}
      />
      <br />
      name :{data.name}
      <br />
      email:{data.email}
      <button onClick={inputHandler} className="cursor-pointer">
        Submit
      </button>
      <button onClick={clearInput} className="cursor-pointer">
        Clear
      </button>
    </div>
  );
};

export default MultipleInput;
