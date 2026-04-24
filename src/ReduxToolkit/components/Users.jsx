import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";

const User = () => {
  const { users, error } = useSelector((state) => state.user);
  console.log(users, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  return <div>User</div>;
};

export default User;
