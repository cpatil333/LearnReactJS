import React, { useState } from "react";

const InputForm = () => {
  const [state, setState] = useState("");
  return (
    <div className="w-screen flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="Enter name..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => setState("")}
        className="rounded-xls border p-5 text-xl font-bold"
      >
        Clear
      </button>
      <br />
      <br />
      <h1>{state}</h1>
    </div>
  );
};

export default InputForm;
