// hooks => functions => state, lifecycle method, context

/* created
updated component
unmount
login  */

/* useState
useEffect
useContext
useReducer
useRef
useCallback
useMemo */

// useState  => add the state to FC
// returns two values = current state, method to update the state

// const [state, setState] = useState(intitalValue);

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
