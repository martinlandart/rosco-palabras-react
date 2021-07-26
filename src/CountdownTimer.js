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

  return (
    // tiempo actual, isCompleted

    // full api

    <div>
      <Countdown
        onComplete={props.onComplete}
        date={props.date}
        renderer={renderer}
        autoStart={true}
        onTick={props.onTick}
      ></Countdown>
    </div>
  );
}
