import React, { useEffect, useState } from "react";

const Timer = ({ setIsOver }) => {
  const [leftTime, setLeftTimer] = useState(5);
  const [displayTime, setDisplayTime] = useState("");

  //left time logic
  useEffect(() => {
    let interValId = setInterval(() => {
      setLeftTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interValId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interValId);
    };
  }, []);

  //timer format logic
  useEffect(() => {
    if (leftTime === 0) {
      setIsOver(true);
    }
    let formatedTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`;
    setDisplayTime(formatedTime);
  }, [leftTime]);

  return <div className="container">🕥 Time left: {displayTime}</div>;
};

export default Timer;
