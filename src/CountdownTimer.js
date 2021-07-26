import React, { useEffect, useRef } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{minutes * 60 + seconds}</span>;
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
        renderer={renderer}
        autoStart={true}
      ></Countdown>
    </div>
  );
}
