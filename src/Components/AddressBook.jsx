import React, { useEffect, useState } from "react";
import Details from "./Details";

export default function AddressBook() {
  const [users, setUsers] = useState({ results: [] });

  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://randomuser.me/api?results=25")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          setUsers(users);
          console.log(users);
        });
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <ol>
        {users.results.map((users, index) => {
          return (
            <li key={index}>
              <h2>
                {users.name.title} {users.name.first} {users.name.last}
              </h2>
              <img src={`${users.picture.large}`} alt=""></img>

              <Details users={users} />
              <hr></hr>
            </li>
          );
        })};
      </ol>
    </div>
  );
}
