import React from "react";

const Hero = (props) => {
  return (
    <div className="bg-orange-600">
      {props.data} {props.count}
    </div>
  );
};

export default Hero;
