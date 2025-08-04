import { useState, useRef } from "react";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerOut, setTimerOut] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerOut(true);
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerOut && <p>You lost!!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : " "}
      </p>
      <p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStart ? "active" : undefined}>
        {timerStart ? "Time is running..." : "Timer is inactive"}
      </p>
    </section>
  );
}
