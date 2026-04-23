import React from "react";
import data from "./data.json";

const Card = () => {
  console.log(data);
  return (
    <div className="p-6 h-screen w-full flex flex-col gap-5 ">
      {data.map((phoneDetails, index) => {
        return (
          <div key={index} className="flex bg-[#282828] p-6 rounded-lg">
            {/* Image */}
            <div className="w-1/4 flex items-center justify-center">
              <img src={phoneDetails.image} alt="" />
            </div>
            {/* Details */}
            <div className="flex-1">
              <h1>{phoneDetails.title}</h1>
              <p className="my-1">
                ⭐ {phoneDetails.rating} {phoneDetails.reviews}
              </p>
              <div>
                <ul className="my-4">
                  {phoneDetails.details.map((item, index) => {
                    return (
                      <li key={index} className="list-disc ml-6">
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-green-500">
                  {phoneDetails.offers.exchangeOffer}
                </p>
                <p className="mt-1 text-green-300">
                  {phoneDetails.offers.bankOffer}
                </p>
              </div>
            </div>
            {/* Price */}
            <div className="flex flex-col items-end-safe">
              <p className="text-2xl font-bold">{phoneDetails.price}</p>
              <p className="line-through">{phoneDetails.originalPrice}</p>
              <p className="text-green-500">{phoneDetails.discount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
