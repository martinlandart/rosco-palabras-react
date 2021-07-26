import React from "react";
import { answerStates } from "./constants";

export default function Letter(props) {
  let bgColor = "bg-purple-700";

  if (props.answerState !== answerStates.NotAnswered) {
    if (props.answerState === answerStates.Correct) {
      bgColor = "bg-green-700";
    } else {
      bgColor = "bg-red-700";
    }
  }

  return (
    <div className="square">
      <label>
        <button
          className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-mono
          ${props.isCurrent ? "border-solid border-4 border-white" : ""}
          ${bgColor}
          `}
          name="size"
          type="radio"
          value={props.value}
        >
          {props.value}
        </button>
      </label>
    </div>
  );
}
