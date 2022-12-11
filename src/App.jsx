import React, { useState } from "react";
import Board from "./board";
import His from "./history";
import Statusmessage from "./statusmessage";
import "./styles.scss";
import Winning from "./winning";

function App() {
  const newgame = [{ board: Array(9).fill(null), letX: true }];

  const [history, sethistory] = useState(newgame);

  const [currentmove, setcurrentmoves] = useState(0);
  const current = history[currentmove];

  const { winner, winningBoard } = Winning(current.board);

  const handelClick = (position) => {
    // console.log(current.board);
    // console.log(current.letX);
    console.log(history);
    // console.log(winner);

    if (current.board[position] || winner) {
      return;
    }

    sethistory((prev) => {
      const last = prev[prev.length - 1];

      const newboard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.letX ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newboard, letX: !last.letX });
    });
    setcurrentmoves((prevt) => prevt + 1);
  };
  const moveTo = (move) => {
    setcurrentmoves(move);
  };

  const NewGame = () => {
    sethistory(newgame);
    setcurrentmoves(0);
  };

  return (
    <div className="app">
      <h1>
        {" "}
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <Statusmessage winner={winner} current={current} />
      <Board
        handelClick={handelClick}
        board={current.board}
        winningBoard={winningBoard}
      />
      <button
        type="reset"
        onClick={NewGame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        new game
      </button>
      <h2 style={{ fontWeight: "normal" }}>Current game history</h2>
      <His history={history} moveTo={moveTo} currentmove={currentmove} />
      <div className="bg-balls" />
    </div>
  );
}

export default App;
