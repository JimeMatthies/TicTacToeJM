import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, text }) => {
    return <button type='button' className={className} onClick={onClick}>{text}</button>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;