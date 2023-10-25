import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  remainSeconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        remainSeconds: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        remainSeconds: state.remainSeconds - 1,
        status: state.remainSeconds === 0 ? "finished" : state.status,
      };
    default:
      return state;
  }
}
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, remainSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  // const allPossiblePoints = 280;
  // console.log(questions);
  const allPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  console.log(questions);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetch", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        remainSeconds,
        numQuestions,
        allPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { useQuiz, QuizProvider };
