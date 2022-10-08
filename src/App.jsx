import React, { useState } from "react";
import Players from './components/Players';
import Score from './components/Score';
import Board from './components/Board';
import Button from './components/Button';
import Footer from './components/Footer';


const App = ({ copyright }) => {
    const [turn, setTurn] = useState("July");
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [player1, setPlayer1] = useState("July");
    const [player2, setPlayer2] = useState("Vale");

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return setWinner(squares[a]);
            }
        }
        return null;
    }

    const handleClick = (num) => {
        if (winner != undefined) {
            alert("Congratulations!!")
        }
        else {
            if (cells[num] !== "") {
                alert("Already Clicked!");
                return;
            }
            let squares = [...cells]
            if (turn === player1) {
                squares[num] = "X"
                setTurn(player2)
            } else {
                squares[num] = "O"
                setTurn(player1)
            }
            checkWinner(squares);
            setCells(squares);
        }
    };
    
    const restartPlayers = () => {
        setPlayer1("Player 1");
        setPlayer2("Player 2");
        setWinner(null);
        setTurn("Player 1");
        setCells(Array(9).fill(''));

    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));

    };

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Players playerOne={player1} playerTwo={player2} onChangeOne={(e) => {setPlayer1(e.target.value); setTurn(e.target.value)}} onChangeTwo={(e) => {setPlayer2(e.target.value); setTurn(e.target.value)}} />
            <Score turn={turn} winner={winner} />
            <Board cells={cells} onClick={handleClick} />
            <div className="d-grid gap-4 d-flex justify-content-center mt-3">
                <Button className={"btn btn-success"} text={"New Players"} onClick={restartPlayers} />
                <Button className={"btn btn-success"} text={"Play Again"} onClick={handleRestart} />
            </div>
            <Footer footer={copyright} />
        </>
    );
}


export default App;