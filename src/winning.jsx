export default function Winning(board) {
  const List = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < 8; i++) {
    const [a, b, c] = List[i];

    // if (board[a] && board[a] === board[b] && board[b] === board[c])
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return {
        winner: board[a],
        winningBoard: List[i],
      };
    }
  }
  return {
    winner: null,
    winningBoard: [],
  };
}
