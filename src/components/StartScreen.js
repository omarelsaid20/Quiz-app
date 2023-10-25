import { useQuiz } from "../context/QuizContext";

function StartScreen() {
  const { dispatch, numQuestions } = useQuiz();
  return (
    <div>
      <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{numQuestions} questions to test your React mastery</h3>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start" })}
        >
          Let's start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
