import React from "react";
import PropTypes from "prop-types"; // do imppt to import proptypes

// getting passed arguments as props -> its an obj
function Header({ text }) {
  //destructuring props
  return (
    <div>
      <header>Helllo{text}</header>
    </div>
  );
}
//providing default props
Header.defaultProps = {
  //providing default vaalue to the props if not provided
  text: "default",
};
//propstypes
Header.propTypes = {
  // propsType must be lower case
  text: PropTypes.string.isRequired,
};
export default Header;
