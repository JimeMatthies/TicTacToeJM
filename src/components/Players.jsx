import React from "react";
import PropTypes from "prop-types";

const Players = ({playerOne, playerTwo, onChangeOne, onChangeTwo}) => {
    return (
        <div className="row mb-3">
            <div className="col input-group">
                <span className="input-group-text input-x" id="basic-addon1">X</span>
                <input type="text" className="form-control" value={playerOne} onChange={onChangeOne} />
            </div>
            <div className="col input-group">
                <span className="input-group-text input-o" id="basic-addon1">O</span>
                <input type="text" className="form-control" value={playerTwo} onChange={onChangeTwo} />
            </div>
        </div>
    );
};

Players.propTypes = {
    playerOne: PropTypes.string.isRequired,
    playerTwo: PropTypes.string.isRequired,
    onChangeOne: PropTypes.func.isRequired,
    onChangeTwo: PropTypes.func.isRequired,
}

export default Players;