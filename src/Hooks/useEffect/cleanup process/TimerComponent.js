import { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer started");
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped and Cleaned up!");
    };
  }, []);

  return (
    <div>
      <h2>Seconds Elapsed:{seconds}</h2>
    </div>
  );
};

export default TimerComponent;

/* React Life Cycle =>
Mounting => taking birth => componnetDidMount()
Updating => updates  => componenetDidupdate
UnMounting =>   => componentWillUnmount*/

<div>
  <p>tgh</p>
  <p>Count</p>
  <p>qwerty</p>
</div>;


// VDOM => UI and manages actual changes in DOM
// light weight copy of the real dom => performance


// in-memory representation in DOM



/* 
MOUNTIng => VDOM of DOM

VDOM <==> DOM


state or prop => changes => updates the VDOM => the updated VDOM <==> dom

<>LI KEY
 */