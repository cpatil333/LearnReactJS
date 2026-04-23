import React, { useState } from "react";

const CheckBoxForm = () => {
  const [isCheched, setIsChecked] = useState(true);
  console.log(isCheched);

  const checkBoxHandle = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="w-screen flex flex-col items-center mt-10 select-none">
      <label htmlFor="cb" className="text-3xl">
        <input
          id="cb"
          type="checkbox"
          className="text-3xl"
          checked={isCheched}
          onChange={checkBoxHandle}
        />
        Term and Conditions
      </label>
    </div>
  );
};

export default CheckBoxForm;
