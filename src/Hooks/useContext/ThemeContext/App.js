import { ThemeProvider } from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";
import ThemeToggler from "./ThemeToggler";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeDisplay />
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
