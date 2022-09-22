import React, { useState } from "react";

const Players = () => {
    const [player1, setPlayer1] = useState("July");
    const [player2, setPlayer2] = useState("Vale")
    console.log(player1);
    console.log(player2);
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

export default Players;
