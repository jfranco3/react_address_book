import React, { useState } from "react";

export default function Details(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  const MoreDetails = () => {
    console.log("users", props.users);
    return (
      <div>
        <p>Gender: {props.users.gender}</p>
        <p>DOB: {props.users.dob.date}</p>
        <p>AGE: {props.users.dob.age}</p>
        <p>
          Location: {props.users.location.street.name}{" "}
          {props.users.location.street.number} {props.users.location.city}{" "}
          {props.users.location.state} {props.users.location.country}
        </p>
      </div>
    );
  };

  return (
    <div>
      {moreInfo && <MoreDetails />}
      <button onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}
