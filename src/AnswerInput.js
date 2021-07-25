import { useState } from "react";

export default function AnswerInput(props) {
  const [answer, setAnswer] = useState("");

  const updateAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ans = answer;
    setAnswer("");

    props.handleSubmit(ans);
  };

  return (
    <div>
      <label htmlFor="answer" className="block text-sm font-medium text-white">
        Answer
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">&gt;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="answer"
            id="answer"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-black"
            placeholder="Type here"
            onChange={updateAnswer}
            value={answer}
          />
        </form>
      </div>
    </div>
  );
}
