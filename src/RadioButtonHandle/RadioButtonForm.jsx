import React, { useState } from "react";

const RadioButtonForm = () => {
  const [gender, setGender] = useState("other");
  console.log(gender);
  const genders = ["male", "female", "other"];
  return (
    <div className="w-screen flex flex-col items-center mt-10 select-none">
      {genders.map((item) => {
        return (
          <label htmlFor={item} key={item}>
            <input
              type="radio"
              id={item}
              value={item}
              checked={gender === item}
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            />
            {item}
          </label>
        );
      })}
      {/* <label htmlFor="male">
        <input
          type="radio"
          id="male"
          value="male"
          checked={gender === "male"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          value="female"
          checked={gender === "female"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label htmlFor="other">
        <input
          type="radio"
          id="other"
          value="other"
          checked={gender === "other"}
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label> */}
    </div>
  );
};

export default RadioButtonForm;
