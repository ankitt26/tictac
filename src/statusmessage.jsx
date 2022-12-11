import React from "react";

export default function StatusMessage({ winner, current }) {
  const noMoveleft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveleft && (
        <>
          Next player is{" "}
          <span className={current.letX ? "text-green" : "text-orange"}>
            {current.letX ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMoveleft && (
        <>
          {" "}
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> tied{" "}
        </>
      )}
    </div>
  );
}
