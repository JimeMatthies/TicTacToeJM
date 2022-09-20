import React, { useState } from "react";
import { whoIsWinner } from "./helper";
import Board from './components/Board'
import Footer from './components/Footer';

export function Main({ footer }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [whoIsNext, setwhoIsNext] = useState(true);
  const winner = whoIsWinner(history[stepNumber]);
  const xo = whoIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xo;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setwhoIsNext(!whoIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setwhoIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
      </div>
      <Footer footer={footer} />
    </>
  )
}