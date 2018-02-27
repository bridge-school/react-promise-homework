import React from "react";

export const Search = ({ onChange, value }) => {
  return <input value={value} onChange={e => onChange(e)} />;
};
