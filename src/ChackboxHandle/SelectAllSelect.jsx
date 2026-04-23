import React, { useState } from "react";

const SelectAllSelect = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });
  const checkboxHandler = (e) => {
    const key = e.target.name;
    setLanguages({ ...languages, [key]: e.target.checked });
  };

  const IsAllSelect = Object.values(languages).every((item) => item === true);
  //console.log(IsAllSelect);

  const handleSelectedAll = (e) => {
    setLanguages({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked,
    });
  };
  return (
    <div className="w-screen flex flex-col items-center mt-10 select-none">
      <label htmlFor="sa" className="text-3xl">
        <input
          id="sa"
          type="checkbox"
          name="sa"
          className="text-3xl"
          checked={IsAllSelect}
          onChange={handleSelectedAll}
        />
        Select All
      </label>

      {Object.keys(languages).map((item) => {
        return (
          <label key={item} htmlFor={item} className="text-3xl">
            <input
              id={item}
              type="checkbox"
              name={item}
              className="text-3xl"
              checked={languages[item]}
              onChange={checkboxHandler}
            />
            {item}
          </label>
        );
      })}

      {/* <label htmlFor="html" className="text-3xl">
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
      </label> */}
      <br />
      <br />
      {languages.html && "HTML Selected"}
      {languages.css && "CSS Selected"}
      {languages.js && "Javascript Selected"}
    </div>
  );
};

export default SelectAllSelect;
