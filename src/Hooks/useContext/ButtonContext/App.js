import React from "react";
import { ButtonProvider } from "./ButtonContext";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <ButtonProvider>
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Consistent Button Styles with useContext</h1>
        <CustomButton onClick={() => alert("Button 1 clicked!")}>
          Button 1
        </CustomButton>
        <br />
        <br />
        <CustomButton onClick={() => alert("Button 2 clicked!")}>
          Button 2
        </CustomButton>
      </div>
    </ButtonProvider>
  );
};

export default App;
