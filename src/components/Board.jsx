import React from "react";
import PropTypes from "prop-types";

const Board = ({ cells, onClick }) => {

    const Cell = ({ num }) => {
        const style = cells[num] ? `squares ${cells[num]}` : `squares`;
        return <div className={style} onClick={() => onClick(num)}>{cells[num]}</div>
    };

    return (
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
    );
};

Board.propTypes = {
    cells: PropTypes.array.isRequired,
    num: PropTypes.number,
    onClick: PropTypes.func,
}

export default Board;