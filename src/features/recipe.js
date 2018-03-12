import React from 'react';

export const Recipe = ({ label, calories }) => {
  return (
    <tr>
        <td><i> {label}</i></td>
        <td> {parseFloat(calories).toFixed(2)}</td>
    </tr>
  );
}; 