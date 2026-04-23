import React from "react";

const UserCard = ({ userDetails }) => {
  return (
    <div className="bg-[tomato] mt-5 p-10">
      {userDetails.age > 18 ? userDetails.name : "To Young"} {userDetails.age}
    </div>
  );
};

export default UserCard;
