import { useState } from "react";

function Example() {
  const [power, setPower] = useState(false);

  return (
    <div>
      <h1>{power ? "ON" : "OFF"} </h1>
      <button onClick={() => setPower(true)} disabled={power ? true : false}>
        ON
      </button>
      <button onClick={() => setPower(false)} disabled={!power ? true : false}>
        OFF
      </button>
    </div>
  );
}

export default Example;
