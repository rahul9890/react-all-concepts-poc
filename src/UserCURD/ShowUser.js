import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const respone = await axios.get("http://localhost:8080/users");
        setUserList(respone.data);
      } catch (error) {
        console.log(error);
      }
      };
      fetchUser();
  },[]);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {userList.map((u) => (
          <li key={u.userId}>
            {u.name}
            {" :"}
            {u.email}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
