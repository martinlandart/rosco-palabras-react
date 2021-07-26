import React, { useEffect, useState } from "react";
import AnswerInput from "./AnswerInput";
import { answerStates } from "./constants";
import Letter from "./Letter";
import Circle from "./Circle";
import CountdownTimer from "./CountdownTimer";
import Score from "./Score";
import { createGame, checkAnswer } from "./ApiService";

const calculateNext = (current, letters, letterKeys) => {
  const currIndex = letterKeys.indexOf(current);

  if (letters[letterKeys[currIndex + 1]]) {
    if (
      letters[letterKeys[currIndex + 1]].answerState ===
      answerStates.NotAnswered
    ) {
      return letterKeys[currIndex + 1];
    } else {
      return calculateNext(letterKeys[currIndex + 1], letters, letterKeys);
    }
  }
  return calculateNext(letterKeys[0], letters, letterKeys);
};

const initState = {
  a: {
    definition: "",
    answerState: answerStates.NotAnswered,
  },
  b: {
    definition: "",
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

const initialTime = 150;

export default function Game() {
  const [letters, setLetters] = useState(initState);
  const [currentLetter, setCurrentLetter] = useState("a");
  const [date, setDate] = useState();
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const asyncWrapper = async () => {
      const createdGame = await createGame();

      let newState = {};

      Object.keys(createdGame).forEach((l) => {
        newState[l] = {
          ...createdGame[l],
          answerState: answerStates.NotAnswered,
        };
      });

      newState = Object.keys(newState)
        .sort((a, b) => a.localeCompare(b, "es"))
        .reduce((obj, key) => {
          obj[key] = newState[key];
          return obj;
        }, {});

      setLetters(newState);
    };

    asyncWrapper();
  }, []);

  const handleSubmit = async (answer) => {
    let answerResult;

    if (answer) {
      const isCorrect = await checkAnswer(letters[currentLetter].id, answer);

      if (isCorrect) {
        answerResult = answerStates.Correct;
        setScore(score + 1); // replace with API call later
      } else {
        answerResult = answerStates.Incorrect;
      }

      setLetters((prevState) => {
        const newState = { ...prevState };

        newState[currentLetter] = {
          ...newState[currentLetter],
          answerState: answerResult,
        };

        return newState;
      });
    }
    setCurrentLetter((prevState) => calculateNext(prevState, letters, Object.keys(letters)));
  };

  const onComplete = () => {
    endGame();
  };

  const startGame = () => {
    setDate(Date.now() + initialTime * 1000);
    setGameIsRunning(true);
  };

  const endGame = () => {
    setGameIsFinished(true);
    setCurrentLetter(null);
  };

  useEffect(() => {
    if (gameIsFinished) {
      console.log("Armar reporte de fin del juego");
    }

    if (
      !Object.values(letters).some(
        (l) => l.answerState === answerStates.NotAnswered
      )
    ) {
      endGame();
    }
  }, [letters, gameIsFinished]);

  return (
    <>
      {gameIsRunning ? (
        <>
          <div>
            <Circle definition={letters[currentLetter]?.definition}>
              {Object.keys(letters).map((l, i) => (
                <Letter
                  key={l}
                  value={l}
                  answerState={letters[l].answerState}
                  isCurrent={l === currentLetter}
                ></Letter>
              ))}
            </Circle>
            {gameIsFinished ? (
              <>
                <div>Game Finished</div>
                <div>Your score is: {score}</div>
              </>
            ) : (
              <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4">
                  <AnswerInput
                    handleSubmit={(answer) => handleSubmit(answer)}
                  />
                </div>
                <div className="ml-6">
                  <Score correctAnswers={score} />
                </div>
              </div>
            )}
            <CountdownTimer
              pauseCallback={endGame}
              initialTime={initialTime}
              isPaused={gameIsFinished}
              date={date}
              onComplete={onComplete}
            />
          </div>
        </>
      ) : (
        <button onClick={startGame}>Start game</button>
      )}
    </>
  );
}
