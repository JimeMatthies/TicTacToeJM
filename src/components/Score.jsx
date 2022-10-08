import React from "react";
import PropTypes from "prop-types";

const Score = ({ turn, winner }) => {
    console.log(winner);

    if (winner == undefined){
        return (
            <div className="row d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                    <p>Players turn : {turn}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="col d-flex justify-content-center">
                    {winner && (<p>{winner} is the Winner!</p>)}
                </div>
            </div>
        );
    }
};

Score.propTypes = {
    turn: PropTypes.string,
    winner: PropTypes.string,
}

export default Score;