import React, { useState } from "react";
import data from "../SelectDropDown/Data";

const DependentSelect = () => {
  //console.log(data);
  const [selectedCountry, setSelectedCountry] = useState("");
  //console.log(selectedCountry);
  const [selectedCity, setSelectedCity] = useState("");
  console.log(selectedCountry, selectedCity);

  return (
    <div className="flex flex-col w-screen items-center justify-centert mt-15">
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity("");
        }}
      >
        <option value="">--Select Country--</option>
        {Object.keys(data).map((item) => {
          return (
            <option
              key={item}
              value={item}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
            >
              {item}
            </option>
          );
        })}
      </select>
      {selectedCountry && (
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="">--Select City--</option>
          {data[selectedCountry].map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default DependentSelect;
