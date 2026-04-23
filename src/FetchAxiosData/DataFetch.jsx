import React, { useEffect, useState } from "react";
//import axios from "axios";
import { axiosInstance } from "../axios";

const DataFetch = () => {
  const [users, setUsers] = useState([]);
  const [userData, setuserData] = useState({
    name: "",
    age: "",
  });
  console.log(userData);
  //Get Data
  const fetchData = async () => {
    const response = await axiosInstance.get("/user");
    setUsers(await response.data);
  };

  //Post Data
  const postData = async () => {
    const response = await axiosInstance.post("/user", userData);
    fetchData();
    setuserData({
      name: "",
      age: "",
    });
    console.log(response);
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setuserData((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const editData = async () => {
    const response = await axiosInstance.put(`/user/${userData.id}`, userData);
    fetchData();
    setuserData({
      name: "",
      age: "",
    });
    console.log(response);
  };

  const deleteUser = async (id) => {
    await axiosInstance.delete(`/user/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-auto flex flex-col items-center justify-center mt-15">
      <input
        type="text"
        className="outline-none border-none p-2 bg-gray-300 text-black rounded-lg"
        placeholder="Enter name"
        name="name"
        value={userData.name}
        onChange={handleUser}
      />
      <input
        type="number"
        name="age"
        className="outline-none border-none p-2 bg-gray-300 text-black rounded-lg mt-2"
        placeholder="Enter age"
        value={userData.age}
        onChange={handleUser}
      />
      {userData.editMode ? (
        <button className="bg-amber-800 p-2 rounded-xl my-2" onClick={editData}>
          Save Data
        </button>
      ) : (
        <button onClick={postData} className="bg-amber-800 p-2 rounded-xl my-2">
          Post Data
        </button>
      )}
      <hr className="text-white w-[15rem] mt-2 mb-2" />
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="bg-gray-700 p-5 rounded-xl my-2 w-[15em]"
          >
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <button
              className="bg-black p-2 w-[3rem] rounded-xl"
              onClick={() => setuserData({ ...user, editMode: true })}
            >
              Edit
            </button>
            <button
              className="bg-black p-2 w-[4rem] rounded-xl ml-1"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DataFetch;
