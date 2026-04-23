import React from "react";
import UserCard from "./UserCard";

const Listview = () => {
  // const arr = ["Manas", "Muskan", "Mahek"];
  const arr = [
    { id: 1, name: "Manas Kumar Lal", age: 21 },
    { id: 2, name: "Ram Kumar Lal", age: 17 },
    { id: 3, name: "Amit Kumar", age: 15 },
    { id: 4, name: "Rohandas Kumar", age: 24 },
  ];

  // const arr = [
  //   ["html", "css", "react", "javascript"],
  //   ["mongodb", "NodeJs", "ExpressJs", "AWS"],
  // ];
  return (
    <div className="flex flex-col items-center justify-center w-screen mt-10">
      {/* Normal array */}

      {/* {arr.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })} */}

      {/* aray of object */}
      {/* {arr.map((item) => {
        return (
          <h1 key={item.id}>
            {item.name} {item.age}
          </h1>
        );
      })} */}

      {/* //Array in array list */}
      {/* {arr.map((item) => {
        return item.map((subItem, index) => {
          return <div key={index}>{subItem}</div>;
        });
      })} */}

      {arr.map((user) => {
        // return user.age < 18 && <UserCard key={user.id} userDetails={user} />;
        return <UserCard key={user.id} userDetails={user} />;
      })}
    </div>
  );
};

export default Listview;
