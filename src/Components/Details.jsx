import React, { useState } from "react";

export default function Details(props) {
  const [moreInfo, setMoreInfo] = useState(false);

  const MoreDetails = () => {
    console.log("users", props.users);
    return (
      <div>
        <p>
          DOB: {props.users.dob.date} AGE: {props.users.dob.age}
        </p>
      </div>
    );
  };

  return (
    <div>
      {moreInfo && <MoreDetails />}
      <button onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Display Less" : "Display More"}
      </button>
    </div>
  );
}
