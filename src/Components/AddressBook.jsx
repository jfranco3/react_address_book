import React, { useEffect } from "react";

export default function AddressBook() {
  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="AddressBookUsers">
      {/* <ol>
        {this.state.arrayOfUsers.results.map((user, i) => {
          return <li key={i}>{user.name}</li>
        })}
      </ol> */}
    </div>
  );
}