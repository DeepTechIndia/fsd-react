import { useContext } from "react";
import ThemeContext from "./ThemeContext";
const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);
  return <h1>The current theme is :{theme}</h1>;
};
export default ThemeDisplay;
