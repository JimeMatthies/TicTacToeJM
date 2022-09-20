import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="d-flex justify-content-center">
    <div className="board col-sm-6">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>  
);

export default Board;