import React, { useState } from "react";

const SelectForm = () => {
  //   const [paymentMode, setPaymentMode] = useState("");
  //   console.log(paymentMode);
  const [language, setLanguage] = useState("");
  const languages = ["HTML", "CSS", "Javascript", "Java", "C", "C++"];
  return (
    <div className="flex flex-col w-screen items-center justify-centert mt-15 select-none">
      {/* <select
        value={paymentMode}
        className="w-[10rem]"
        onChange={(e) => {
          setPaymentMode(e.target.value);
        }}
      >
        <option value="">---Select---</option>
        <option value="upi">UPI</option>
        <option value="cod">COD</option>
        <option value="card">Card</option>
      </select> */}
      <select
        className="w-[10rem"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        {languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectForm;
