import React from "react";
import { useSelector } from "react-redux";
const ShowUsers = () => {
  const users = useSelector(state => state.user.user);
  console.log("show user", users);
  return (
    <div>
      <h1>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </h1>
    </div>
  );
};

export default ShowUsers;
