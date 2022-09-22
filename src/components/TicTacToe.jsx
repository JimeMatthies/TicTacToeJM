import React, { useState } from "react";
/* import PropTypes from "prop-types"; */

const TicTacToe = () => {
    const [turn, setTurn] = useState("Player1");
    const [cells, setCells] = useState(Array(9).fill(''));
    const [ganador, setGanador] = useState();

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

    const manoClick = (num) => {
        if (cells[num] !== ""){
            alert("Already Clicked!");
            return;
        }
        let cuadrados = [...cells]
        if (turn === "Player1") {
            cuadrados [num] = "X"
            setTurn("Player2")
        } else {
            cuadrados [num] = "O"
            setTurn("Player1")
        }
        checkforWinner(cuadrados);
        setCells(cuadrados);
    }

    const Cell = ({ num }) => {
        const style = cells[num] ? `squares ${cells[num]}` : `squares`;
        return <div className={style} onClick={() => manoClick(num)}>{cells[num]}</div>
    }

    return (
        <>
            <div>
                <p>Turn: {turn}</p> 
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
                {ganador && (
                    <>
                        <p>{ganador} is the Winner!</p>
                        <button>Play Again</button>
                    </>
                )}
            </div>
        
        </>
    );
}

/* Footer.propTypes = {
    footer: PropTypes.object.isRequired,
}; */

export default TicTacToe;