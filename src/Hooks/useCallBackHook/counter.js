import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  /*   const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Count", count);
  }; */
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("Count", count);
  }, []);

  //   console.log("Rendering again");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
