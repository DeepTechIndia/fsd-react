import { useContext } from "react";
import { ButtonContext } from "./ButtonContext";

const CustomButton = ({ onClick, children }) => {
  // Access the button styles from ButtonContext
  const buttonStyles = useContext(ButtonContext);

  return (
    <button
      onClick={onClick}
      style={{
        ...buttonStyles,
        ":hover": buttonStyles.hover, // Not functional in plain React; for styling with CSS-in-JS, you can use libraries like styled-components or Emotion.
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
