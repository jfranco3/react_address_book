// // import React, { useEffect } from 'react'

// // export default function AddressBook() {

// //   useEffect(() => {
// //     fetch('https://randomuser.me/api?results=25')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     }, []);

// //   return (
// //   <div>
// //     <h2><strong>ADDRESS BOOK USERS</strong></h2>
// //   </div>
// //   )
// // }

import userEvent from "@testing-library/user-event";
import React, { Component } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfUsers: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => {
        return response.json();
      })
      .then((arrayOfUsers) => this.setState({ arrayOfUsers }));
  }

  render() {
    return (
      <div className="AddressBook">
        <h2>
          <strong>ADDRESS BOOK USERS</strong>
        </h2>
        {/* <ol>
          {this.state.arrayOfUsers.map(() => {
            return <li></li>;
          })}
        </ol> */}
      </div>
    );
  }
}
