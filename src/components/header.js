import React from "react";
import PropTypes from "prop-types"; // do imppt to import proptypes
import Button from "./Button";
// getting passed arguments as props -> its an obj
function Header({ title, toggleBar, setToggleBar }) {
  // passing an event object will propvide additional features to work with
  console.log(toggleBar);
  //destructuring props
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={!toggleBar ? "green" : "red"}
        text={!toggleBar ? "ADD TASK" : "CLOSE"}
        onClick={() => setToggleBar(!toggleBar)}
      />
    </header>
    //style={{ color: "red" }} -> style atrtribute properties should be enclosed in double flower braces
  );
}

//providing default props
Header.defaultProps = {
  //providing default vaalue to the props if not provided
  title: "default",
};

//propstypes
Header.propTypes = {
  // propsType must be lower case
  title: PropTypes.string.isRequired,
};
export default Header;
