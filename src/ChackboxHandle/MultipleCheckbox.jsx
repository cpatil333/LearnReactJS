import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });
  const checkboxHandler = (e) => {
    const key = e.target.name;
    setLanguages({ ...languages, [key]: e.target.checked });
  };
  return (
    <div className="w-screen flex flex-col items-center mt-10 select-none">
      <label htmlFor="html" className="text-3xl">
        <input
          id="html"
          type="checkbox"
          name="html"
          className="text-3xl"
          checked={languages.html}
          onChange={checkboxHandler}
        />
        HTML
      </label>
      <label htmlFor="css" className="text-3xl">
        <input
          id="css"
          type="checkbox"
          name="css"
          className="text-3xl"
          checked={languages.css}
          onChange={checkboxHandler}
        />
        CSS
      </label>
      <label htmlFor="js" className="text-3xl">
        <input
          id="js"
          type="checkbox"
          name="js"
          className="text-3xl"
          checked={languages.js}
          onChange={checkboxHandler}
        />
        Javascript
      </label>
      <br />
      <br />
      {languages.html && "HTML Selected"}
      {languages.css && "CSS Selected"}
      {languages.js && "Javascript Selected"}
    </div>
  );
};

export default MultipleCheckbox;
