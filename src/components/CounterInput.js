import React from "react";

function CounterInput({ label, value, color, changeHandler }) {
  return (
    <>
      <span>{label} by</span>
      <input style={{ color: color }} value={value} onChange={changeHandler} />
    </>
  );
}

export { CounterInput };
