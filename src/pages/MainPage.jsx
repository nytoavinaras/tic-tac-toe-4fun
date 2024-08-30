import React, { useState } from "react";

export default function MainPage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isCircleTurn, setIsCircleTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isCircleTurn ? "O" : "X";
    setBoard(newBoard);
    setIsCircleTurn(!isCircleTurn);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `It's the ${isCircleTurn ? "Circle" : "Cross"}'s turn!`;

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsCircleTurn(true);
  };

  return (
    <div className="container">
      <div className="title-container" style={{ marginBottom: "32px" }}>
        <h1>Tic Tac Toe</h1>
        <p>{status}</p>
      </div>

      <div className="grid-container">
        {board.map((value, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
