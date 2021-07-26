import React, { useRef } from "react";
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

export default function CountdownTimer(props) {
  console.log("asdasd");
  const timerRef = useRef({});

  return (
    // tiempo actual, isCompleted

    // full api

    <div>
      <Countdown
        ref={timerRef}
        date={Date.now() + props.initialTime * 1000}
        renderer={renderer}
        autoStart={true}
        onTick={props.onTick}
      ></Countdown>
    </div>
  );
}
