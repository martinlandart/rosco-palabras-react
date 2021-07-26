import React, { useEffect, useRef } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You ran out of time!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed, isPaused }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    if (isPaused) {
      return <span>Time Left: {minutes * 60 + seconds}</span>;
    } else {
      return <span>{minutes * 60 + seconds}</span>;
    }
  }
};

export default function CountdownTimer({ onComplete, date, isPaused }) {
  const timerRef = useRef({});

  useEffect(() => {
    if (isPaused) {
      timerRef.current.pause();
    }
  }, [isPaused]);

  return (
    <div>
      <Countdown
        ref={timerRef}
        onComplete={onComplete}
        date={date}
        renderer={(props) => renderer({ ...props, isPaused: isPaused })}
        autoStart={true}
      ></Countdown>
    </div>
  );
}
