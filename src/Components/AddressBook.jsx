import React, { useEffect, useState } from "react";
import Details from "./Details";

export default function AddressBook(props) {
  const [people, setPeople] = useState({ results: [] });

  useEffect(() => {
    const fetchPeople = () => {
      fetch("https://randomuser.me/api?results=25")
        .then((response) => {
          return response.json();
        })
        .then((people) => {
          setPeople(people);
          console.log(people);
        });
    };
    fetchPeople();
  }, []);

  return (
    <div>
      <ol>
        {people.results.map((person, index) => {
          return (
            <li key={index}>
              <h2>
                {person.name.title}{" "}
                {person.name.first}{" "}
                {person.name.last}
              </h2>
              <p>Gender: {person.gender}</p>
              <p>
                Location: {person.location.street.name}{" "}
                {person.location.street.number} {person.location.city}{" "}
                {person.location.state} {person.location.country}
              </p>
              <img src={`${person.picture.large}`}></img> 
         
              <Details person={person} />
              <hr></hr>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
