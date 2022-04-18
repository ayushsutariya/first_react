import React, { useState } from "react";

export default function Counter(props) {
  const [count, statecount] = useState[101];

  const decreament = () => {
    statecount(count--);
  };

  return (
    <table>
      <tr>
        <td>
          <button onClick={() => decreament()}>
            <h2>-</h2>
          </button>
        </td>
        <td>
            <h2>{count}</h2>
        </td>
        
      </tr>
    </table>
  );
}
