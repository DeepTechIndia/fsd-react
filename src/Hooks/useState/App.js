import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default App;

// Rules of Hooks
/* 1.always call hooks at the top level 
2. inside the component only, not with any other functions
3.cant use inside a condition*/
