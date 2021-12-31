import React from "react";
import "./card.css";

export const Card = (props) => {
  // console.log("props", props.monster.id);
  // console.log("props", props.monster.id);

  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=2&size=180x180`}
      />
      <h2>{props.monster.name} </h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
