import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_PALABRA_API_BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const createGame = async () => {
  try {
    const res = await instance.get("api/createGame");

    return res.data.letters;
  } catch (error) {
    console.log(error.toJSON());
  }
};

export const checkAnswer = async (questionId, answer) => {
  try {
    const res = await instance.post(`/api/answer/${questionId}`, {
      answer: answer,
    });

    console.log(res.data);

    const isCorrect = res.data.isCorrect;

    return isCorrect;
  } catch (error) {
    console.log(error.toJSON());
  }
};
