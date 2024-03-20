import { useRef, useState } from "react";

let adjustinterval = undefined;

function Home() {
  const [watch, setWatch] = useState(0);
  const [stopp, setStop] = useState(false);

  const startfun = () => {
    adjustinterval = setInterval(() => {
      setWatch((n) => n + 1);
    }, 1000);

    setStop(true);
  };

  const stopfun = () => {
    clearInterval(adjustinterval);
    setStop(false);
  };
  const resetfun = () => {
    setWatch(0);
    clearInterval(adjustinterval);
    setStop(false);
  };

  return (
    <>
      <h2> this is home</h2>
      <h3>{watch}</h3>
      <button disabled={stopp} onClick={startfun}>
        {" "}
        start
      </button>
      <button onClick={stopfun}> stop</button>
      <button onClick={resetfun}> reset</button>
    </>
  );
}

export default Home;
