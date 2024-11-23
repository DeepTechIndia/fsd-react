import { useState, useEffect } from "react";

// useEffect => fetching the data

// useEffect(()=>{},[dependent1])
/* 
function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Componnet Rendered");
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Incement</button>
    </div>
  );
}

export default CounterComponent; */

function DependencyEffectComponnet() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Count Changed:", count);
    setMessage(`Count is ${count}`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={increment}>Incement</button>
    </div>
  );
}

export default DependencyEffectComponnet;
