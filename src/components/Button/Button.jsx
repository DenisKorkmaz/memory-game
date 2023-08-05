import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Button({
  buttonName,
  className,
  hoverable,
  onClick,
  active,
}) {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setActiveButton(active);
  }, [active]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (buttonName === "Start Game") {
      console.log("Start Game!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} ${activeButton ? "second-btn" : "first-btn"} ${
        hoverable ? "hoverable" : ""
      }`}
     >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
