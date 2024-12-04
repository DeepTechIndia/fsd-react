import React from "react";

function Heading() {
  console.log("Rendering the Heading");
  return <h2>UseCallBack Hook</h2>;
}

export default React.memo(Heading);
