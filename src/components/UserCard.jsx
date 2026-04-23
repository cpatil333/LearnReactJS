import React from "react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { CiLinkedin, CiHeart } from "react-icons/ci";
import Button from "./Button";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const UserCard = ({ title, role, likeCount, imageUrl }) => {
  console.log(title);
  return (
    <div className="shadow-2xl rounded-xl overflow-hidden">
      <div className="relative w-full aspect-video bg-blue-400">
        {/* //top part */}
        <img
          className="absolute h-full rounded-full aspect-square object-cover object-top left-[50%] -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white"
          src={imageUrl}
          alt="error loading image"
        />
      </div>
      {/* //bottom part */}

      <div className="flex flex-col items-center pt-[5rem] pb-[2rem]">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="my-2">{role}</p>
        <div className="flex flex-row gap-[1rem] my-[2rem]">
          <FaYoutube className="bg-red-400 p-2 rounded-full text-4xl text-white" />
          <FaFacebook className="bg-red-400 p-2 rounded-full text-4xl text-white" />
          <FaTwitter className="bg-red-400 p-2 rounded-full text-4xl text-white" />
          <CiLinkedin className="bg-red-400 p-2 rounded-full text-4xl text-white" />
        </div>
        <div className="flex gap-[2rem] pt-2">
          <Button text="Subscribe" />
          <Button text="Message" />
        </div>
        <div className="flex items-center gap-[1rem] my-[2rem]">
          <div className="flex items-center text-xl gap-1">
            <CiHeart />
            <p>{likeCount}</p>
          </div>
          <Line />
          <div className="flex items-center text-xl gap-1">
            <FaRegComment />
            <p>{likeCount}</p>
          </div>
          <Line />
          <div className="flex items-center text-xl gap-1">
            <PiShareFat />
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return <div className="w-[1px] h-[1rem] bg-black/20"></div>;
};
export default UserCard;
