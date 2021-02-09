import React from "react";

function CounterButton({
  label,
  color = "#fff",
  backgroundColor = "#000",
  clickHandler
}) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={clickHandler}
    >
      {label}
    </button>
  );
}

export { CounterButton };
