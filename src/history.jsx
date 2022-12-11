import React from "react";

export default function His({ history, moveTo, currentmove }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentmove ? "active" : ""}`}
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? `Go to game start` : `go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
