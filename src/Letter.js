import React from "react";

export default function Letter(props) {
  return (
    <div>
      <span></span>
      <label>
        <button
          className={`w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white 
          ${props.isCurrent ? "border-solid border-4 border-white" : ""} `}
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
