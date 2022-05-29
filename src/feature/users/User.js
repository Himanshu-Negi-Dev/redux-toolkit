import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div>
      {users?.map((user) => {
        return <p key={user?.id}>{user?.name}</p>;
      })}
    </div>
  );
};

export default User;
