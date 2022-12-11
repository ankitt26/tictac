import React from "react";
import Btn from "./button";

export default function Board({ handelClick, board, winningBoard }) {
  const btnnn = (position) => {
    const isWinningBoard = winningBoard.includes(position);
    return (
      <Btn
        isWinningBoard={isWinningBoard}
        value={board[position]}
        onClick={() => {
          handelClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {btnnn(0)}
        {btnnn(1)}
        {btnnn(2)}
      </div>
      <div className="board-row">
        {btnnn(3)}
        {btnnn(4)}
        {btnnn(5)}
      </div>
      <div className="board-row">
        {btnnn(6)}
        {btnnn(7)}
        {btnnn(8)}
      </div>
    </div>
  );
}
