import React from "react";

export default function Btn({ onClick, value, isWinningBoard }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`square ${isWinningBoard ? "winning" : ""} ${
          value === "X" ? "text-green" : "text-orange"
        }`}
      >
        {value}
      </button>
    </div>
  );
}
