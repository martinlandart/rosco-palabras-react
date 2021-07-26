import React, { useState } from "react";
import AnswerInput from "./AnswerInput";
import { answerStates } from "./constants";
import Letter from "./Letter";
import Circle from "./Circle";

const calculateNext = (current, letterKeys) => {
  const currIndex = letterKeys.indexOf(current);

  return letterKeys[letterKeys[currIndex + 1] ? currIndex + 1 : 0];
};

const initState = {
  a: {
    definition: "Definicion jajajasjdaksdjaksdjasdjaslkdjas",
    answerState: answerStates.NotAnswered,
  },
  b: {
    definition: "Definicion bbbasdadsasdasd",
    answerState: answerStates.NotAnswered,
  },
  c: { definition: "", answerState: answerStates.NotAnswered },
  d: { definition: "", answerState: answerStates.NotAnswered },
  e: { definition: "", answerState: answerStates.NotAnswered },
  f: { definition: "", answerState: answerStates.NotAnswered },
  g: { definition: "", answerState: answerStates.NotAnswered },
  h: { definition: "", answerState: answerStates.NotAnswered },
  i: { definition: "", answerState: answerStates.NotAnswered },
  j: { definition: "", answerState: answerStates.NotAnswered },
  l: { definition: "", answerState: answerStates.NotAnswered },
  m: { definition: "", answerState: answerStates.NotAnswered },
  n: { definition: "", answerState: answerStates.NotAnswered },
  ñ: { definition: "", answerState: answerStates.NotAnswered },
  o: { definition: "", answerState: answerStates.NotAnswered },
  p: { definition: "", answerState: answerStates.NotAnswered },
  q: { definition: "", answerState: answerStates.NotAnswered },
  r: { definition: "", answerState: answerStates.NotAnswered },
  s: { definition: "", answerState: answerStates.NotAnswered },
  t: { definition: "", answerState: answerStates.NotAnswered },
  u: { definition: "", answerState: answerStates.NotAnswered },
  v: { definition: "", answerState: answerStates.NotAnswered },
  x: { definition: "", answerState: answerStates.NotAnswered },
  y: { definition: "", answerState: answerStates.NotAnswered },
  z: { definition: "", answerState: answerStates.NotAnswered },
};

export default function Game() {
  const [letters, setLetters] = useState(initState);
  const [currentLetter, setCurrentLetter] = useState("a");

  const handleClick = (letter) => {
    console.log(letter);
  };

  const handleSubmit = (answer) => {
    let answerResult;

    if (currentLetter === "b") {
      answerResult = answerStates.Incorrect;
    } else {
      answerResult = answerStates.Correct; // replace with API call later
    }

    setLetters((prevState) => {
      console.log("set");

      prevState[currentLetter] = { definition: "", answerState: answerResult };

      return prevState;
    });

    setCurrentLetter((prevState) =>
      calculateNext(prevState, Object.keys(letters))
    );
  };

  return (
    <>
      <div>
        <Circle definition={letters[currentLetter].definition}>
          {Object.keys(letters).map((l, i) => (
            <Letter
              key={l}
              value={l}
              answerState={letters[l].answerState}
              isCurrent={l === currentLetter}
              onClick={(letter) => handleClick(letter)}
            ></Letter>
          ))}
        </Circle>
      </div>
      <div>
        <AnswerInput
          handleSubmit={(answer) => handleSubmit(answer)}
        ></AnswerInput>
      </div>
    </>
  );
}
