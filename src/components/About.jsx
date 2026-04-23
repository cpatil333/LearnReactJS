import React from "react";
const About = (props) => {
  return (
    <div className="bg-blue-600">
      {props.data} {props.count}
    </div>
  );
};

export default About;
