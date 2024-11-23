import { useState } from "react";
import TimerComponent from "./TimerComponent";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h1>React Timer with cleanup</h1>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      <hr />
      {showTimer && <TimerComponent />}
    </div>
  );
};

export default App;
