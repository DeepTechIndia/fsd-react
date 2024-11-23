// useReducer => advancd react hook => complex state => Redux library

import { useReducer } from "react";

/* 
const [state,dispatch ] = useReducer(reducer, intitalValue)


intitalValue => Object, array, any other data type
reducer(currentState, action) */

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
