import React, { useState } from "react";
/* import PropTypes from "prop-types"; */

const TicTacToe = () => {
    const [turn, setTurn] = useState(player1);
    const [cells, setCells] = useState(Array(9).fill(''));
    const [ganador, setGanador] = useState();
    const [player1, setPlayer1] = useState("July");
    const [player2, setPlayer2] = useState("Vale");
    
    const checkforWinner = (cuadrados) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };
        for (let combo in combos){
            combos[combo].forEach((pattern)=>{
                if (
                    cuadrados[pattern[0]] === "" ||
                    cuadrados[pattern[1]] === "" ||
                    cuadrados[pattern[2]] === "" 
                ){

                } else if (
                    cuadrados[pattern[0]] === cuadrados[pattern[1]] &&
                    cuadrados[pattern[1]] === cuadrados[pattern[2]]
                ){
                    setGanador(cuadrados[pattern[0]]);
                }
            })
        }
    };

    const Players = () => {
        return (
            <div className="row mb-3">
                <div className="col input-group">
                    <span className="input-group-text input-x" id="basic-addon1">X</span>
                    <input type="text" className="form-control" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
                </div>
                <div className="col input-group">
                    <span className="input-group-text input-o" id="basic-addon1">O</span>
                    <input type="text" className="form-control" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
                </div>
            </div>
        );
    };

    const manoClick = (num) => {
        if (cells[num] !== ""){
            alert("Already Clicked!");
            return;
        }
        let cuadrados = [...cells]
        if (turn === player1) {
            cuadrados [num] = "O"
            setTurn(player2)
        } else {
            cuadrados [num] = "X"
            setTurn(player1)
        }
        checkforWinner(cuadrados);
        setCells(cuadrados);
    };

    const handleRestart = () => {
        setGanador(null);
        setCells(Array(9).fill(''));

    };

    const Cell = ({ num }) => {
        const style = cells[num] ? `squares ${cells[num]}` : `squares`;
        return <div className={style} onClick={() => manoClick(num)}>{cells[num]}</div>
    };

    return (
        <>
            <div className="row d-flex justify-content-evenly">
                <div className="col d-flex justify-content-center">
                    <p>Next Player: {turn}</p>
                </div>
                <div className="col d-flex justify-content-center">
                    {ganador && (<p>{ganador} is the Winner!</p>)}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="board">
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </div>
            </div>            
            <div>
                    <>
                        <button onClick={() => handleRestart()}>Play Again</button>
                    </>
            </div>
        
        </>
    );
}

/* Footer.propTypes = {
    footer: PropTypes.object.isRequired,
}; */

export default TicTacToe;