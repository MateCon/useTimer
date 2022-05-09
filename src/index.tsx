import { render } from "react-dom";
import useTimer from "./useTimer";
import "./styles.css";

const App = () => {
  const timer = useTimer(1, false, 10000);

  return (
    <div className="App">
      <h1>useTimer</h1>
      <p>A simple timer hook for React</p>
      <>
        <p className="timer">{timer.getTimeFormatted(2)}</p>
        {timer.isRunning ? (
          <button onClick={timer.stop}>Stop</button>
        ) : (
          <button onClick={timer.resume}>Resume</button>
        )}
        <button onClick={timer.restart}>Restart</button>
      </>
    </div>
  );
};

render(<App />, document.getElementById("root"));
