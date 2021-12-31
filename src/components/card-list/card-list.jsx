import React from "react";
import { Card } from "../card/card";
import "../card-list.css";

export const CardList = (props) => {
  // console.log(props);
  return (
    <div className="cardlist">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
