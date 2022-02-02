import React from "react";
import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick} // it will take a callback function
      style={{ backgroundColor: color }} // inline styling other way is to style={{styler}} ; const styler = {backgroudColor:"red"}
      className="btn"
    >
      {text}
      {/* passing dynamic data */}
    </button>
  );
}
Button.defaultProps = {
  color: "green",
  text: "ADD",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
