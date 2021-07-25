import React from "react";

export default function Letter(props) {
  let bgColor = "bg-purple-700";

  console.log(props.answerState);

  if (props.answerState) {
    if (props.answerState === "correct") {
      bgColor = "bg-green-700";
    } else {
      bgColor = "bg-red-700";
    }
  }

  return (
    <div>
      <span></span>
      <label>
        <button
          className={`w-9 h-9 flex items-center justify-center rounded-full text-white 
          ${props.isCurrent ? "border-solid border-4 border-white" : ""} 
          ${bgColor}
          `}
          name="size"
          type="radio"
          value={props.value}
          onClick={() => props.onClick(props.value)}
        >
          {props.value}
        </button>
      </label>
    </div>
  );
}
