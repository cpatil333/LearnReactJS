import React, { useState } from "react";

const PaymentRadioButton = () => {
  const [paymentMode, setPaymentMode] = useState({});
  console.log(paymentMode);
  const payments = [
    { id: "UPI", info: "Instant transfer via upi apps" },
    { id: "Card", info: "pay using credit or debit card" },
    { id: "COD", info: "pay when the order arrives" },
  ];
  return (
    <div className="w-screen flex flex-col items-center mt-10 select-none">
      {payments.map((item) => {
        return (
          <label htmlFor={item.id} key={item.id}>
            <input
              id={item.id}
              value={item.id}
              type="radio"
              name="payments"
              checked={paymentMode.id === item.id}
              onChange={() => setPaymentMode(item)}
            />
            {item.id}
          </label>
        );
      })}
      <p>Mode of Payments: {paymentMode.id} </p>
      <p>Payment Details :{paymentMode.info}</p>
    </div>
  );
};

export default PaymentRadioButton;
