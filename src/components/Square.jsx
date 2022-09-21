import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
};


export default Square;
