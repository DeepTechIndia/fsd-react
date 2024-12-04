import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count : {count}
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something...."
      />
      <Child name="React.memo Example" />
    </div>
  );
}

export default Parent;


// the component is pure
//

// notuse
//lightweight
//if props are changing frequently
//performance benefits are negligeble