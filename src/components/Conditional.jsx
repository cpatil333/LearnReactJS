import React from "react";

const Conditional = () => {
  const isMessage = "Hi";
  //short circuiting
  return <div>{isMessage && <h1>{isMessage}</h1>}</div>;
};

export default Conditional;
