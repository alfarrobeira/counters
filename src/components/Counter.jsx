import React from "react";

export default ({ id, name, value, handleDecrease, handleIncrease }) => {
  return (
    <>
      <div key={id} className="counter">
        {name && <h4>{name}</h4>}
        <div>{value}</div>
        <button onClick={() => handleDecrease(id)}>-</button>

        <input
          name="increment"
          type="button"
          value="+"
          onClick={() => handleIncrease(id)}
        />
      </div>
    </>
  );
};
