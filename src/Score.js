import React from "react";

export default function Score({ correctAnswers }) {
  return (
    <div>
      <span className="w-9 h-9 flex items-center justify-center rounded-full text-white font-mono bg-green-700">
        {correctAnswers}
      </span>
    </div>
  );
}
