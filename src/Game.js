import React, { useState } from "react";
import AnswerInput from "./AnswerInput";
import Letter from "./Letter";

export default function Game() {
  const initState = [];
  initState.push({ letter: "a", answerState: null, isCurrent: true });
  initState.push({ letter: "b", answerState: null, isCurrent: false });
  initState.push({ letter: "c", answerState: null, isCurrent: false });
  initState.push({ letter: "d", answerState: null, isCurrent: false });
  initState.push({ letter: "e", answerState: null, isCurrent: false });
  initState.push({ letter: "f", answerState: null, isCurrent: false });
  initState.push({ letter: "g", answerState: null, isCurrent: false });
  initState.push({ letter: "h", answerState: null, isCurrent: false });
  initState.push({ letter: "i", answerState: null, isCurrent: false });

  const [letters, setLetters] = useState(initState);

  const handleClick = (letter) => {
    console.log(letter);
  };

  const handleSubmit = (answer) => {
    console.log(answer);

    const updatedLetters = letters.slice();

    const currIndex = updatedLetters.findIndex((l) => l.isCurrent === true);

    let currLetter = updatedLetters[currIndex];
    currLetter.answerState = "correct";
    currLetter.isCurrent = false;

    updatedLetters[currIndex] = currLetter;

    updatedLetters[
      updatedLetters[currIndex + 1] ? currIndex + 1 : 0
    ].isCurrent = true;

    setLetters(updatedLetters);
  };

  return (
    <div className="grid grid-rows-3">
      <div className="flex row-span-2">
        {letters.map((l) => (
          <Letter
            key={l.letter}
            value={l.letter}
            answerState={l.answerState}
            isCurrent={l.isCurrent}
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
