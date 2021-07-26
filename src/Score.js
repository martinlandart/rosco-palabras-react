import React from "react";

export default function Score({ correctAnswers }) {
  return (
    <span className="w-11 h-11 flex items-center justify-center rounded-full text-white font-mono bg-green-700">
      {correctAnswers}
    </span>
  );
}
