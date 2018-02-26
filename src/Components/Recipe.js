import React from "react";

export const Recipe = ({ name, calories }) => {
  return (
    <div key={name}>
      Name: {name}
      <br />
      Calories: {calories}}
    </div>
  );
};
