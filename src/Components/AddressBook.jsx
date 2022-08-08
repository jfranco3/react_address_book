import React, { useEffect, useState } from "react";
import Details from "./Details";

export default function AddressBook2() {
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
              <p>Gender: {users.gender}</p>
              <p>
                Location: {users.location.street.name}{" "}
                {users.location.street.number} {users.location.city}{" "}
                {users.location.state} {users.location.country}
              </p>
              <img src={`${users.picture.large}`}></img>

              <Details users={users} />
              <hr></hr>
            </li>
          );
        })}
      </ol>
    </div>
  );
}