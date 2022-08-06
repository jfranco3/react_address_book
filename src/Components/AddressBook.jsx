// import React, {useState} from "react";
import React, { useEffect } from 'react'


export default function AddressBook() {

  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(json => console.log(json))
    }, []);


  return (
  <div>
    <h2><strong>ADDRESS BOOK USERS</strong></h2>
  </div>
  )
}


