import React from "react";

function CounterDisplay({ count }) {
  return (
    <>
      <div>The current count is...</div>
      <div className="counterOutput">{count}</div>
    </>
  );
}

export { CounterDisplay };
