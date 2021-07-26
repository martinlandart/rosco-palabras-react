import axios from "axios";

const instance = axios.create({
  baseUrl: process.env.REACT_APP_PALABRA_API_BASE_URL,
  //   timeout: 1000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const createGame = async () => {
  try {
    const res = await instance.get("api/createGame");

    return res.data;
  } catch (error) {
    console.log(error.toJSON());
  }
};

export const checkAnswer = async (questionId, answer) => {
  try {
    const res = await instance.post(`/api/answer/${questionId}`, {
      answer: answer,
    });

    const isCorrect = res.data.isCorrect;

    return isCorrect;
  } catch (error) {
    console.log(error.toJSON());
  }
};
