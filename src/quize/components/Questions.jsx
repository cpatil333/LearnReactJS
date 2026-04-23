import React, { useState } from "react";
import questionJson from "../components/questions.json";

const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questionJson[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndex < questionJson.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  //console.log(questionJson[currentIndex]);
  return (
    <div className="mt-8, mb-4">
      <h1>{questionJson[currentIndex].questions}</h1>
      <div className="flex flex-col gap-1 mt-5">
        {questionJson[currentIndex].options.map((opt) => {
          return (
            <button
              key={opt}
              className="cursor-pointer"
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
