import React, { useState } from "react";
import AnswerInput from "./AnswerInput";
import Letter from "./Letter";

export default function Game() {
  const initState = [];
  initState.push({ letter: "a", answerState: null });
  initState.push({ letter: "b", answerState: null });
  initState.push({ letter: "c", answerState: null });
  initState.push({ letter: "d", answerState: null });
  initState.push({ letter: "e", answerState: null });
  initState.push({ letter: "f", answerState: null });
  initState.push({ letter: "g", answerState: null });
  initState.push({ letter: "h", answerState: null });
  initState.push({ letter: "i", answerState: null });

  const [letters, setLetters] = useState(initState);

  const handleClick = (letter) => {
    console.log(letter);
  };

  const handleSubmit = (answer) => {
    alert(answer);
  };

  return (
    <div className="grid grid-rows-3">
      <div className="flex row-span-2">
        {letters.map((l) => (
          <Letter
            key={l.letter}
            value={l.letter}
            answerState={l.answerState}
            onClick={(letter) => handleClick(letter)}
          ></Letter>
        ))}
      </div>
      <div className="flex row-span-1">
        <AnswerInput
          handleSubmit={(answer) => handleSubmit(answer)}
        ></AnswerInput>
      </div>
    </div>
  );
}
