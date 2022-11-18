import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [activeTime, setActiveTime] = useState("");

  const getValue = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const setTime = () => {
    setActiveTime(inputValue);
  };

  const setZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = setZero(Math.floor((activeTime / 3600) % 60)),
    min = setZero(Math.floor((activeTime / 60) % 60)),
    sec = setZero(Math.floor(activeTime % 60));

  useEffect(() => {
    if (activeTime > 0) {
      setTimeout(setActiveTime, 1000, activeTime - 1);
    } else {
      setActiveTime(0);
    }
  }, [activeTime]);

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Seconds" type="text" onChange={getValue} />
        <button onClick={() => setTime()}>Start</button>
        <br />
        <br />
        <span>
          {hours}:{min}:{sec}
        </span>
      </header>
    </div>
  );
}

export default App;
