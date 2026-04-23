import React from "react";

const Button = (props) => {
  return (
    <div className="bg-blue-400 text-white rounded-full py-3 px-5">
      {props.text}
    </div>
  );
};

export default Button;
