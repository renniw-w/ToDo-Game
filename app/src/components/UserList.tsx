import React, { useEffect, useState } from "react";
import eventBus from "./EventBus";
import DummyUsers from "./DummyData";

const UserList = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [dataLoadedUsers, setDataLoadedUsers] = useState(false);

  eventBus.on("UserChanged", (data: any) => setDataLoadedUsers(false));
  /*if (!dataLoadedUsers) {
    console.log("Loading User...");
    fetch("/api/User")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
      });
    setDataLoadedUsers(true);
    console.log("data loaded");
  }*/
  setUsers(DummyUsers);

  useEffect(() => {
    setLoadingUsers(true);
  }, []);

  if (loadingUsers || !dataLoadedUsers) {
    return <p>Loading...</p>;
  }
  function onUpdateUser(updatedUser: user) {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
  }

  return (
    <ul>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};
export default UserList;
