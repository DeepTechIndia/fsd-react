import React from "react";

function Child({ name }) {
  console.log("Child COmponent re-rendered");
  return <div>Child Component : {name}</div>;
}

export default React.memo(Child);
