import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const { points, allPossiblePoints, highScore, dispatch } = useQuiz();
  const percentage = (points / allPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scord {points} out of {allPossiblePoints}({Math.ceil(percentage)})
      </p>
      <p className="highscore">Highscore{highScore}points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart The Quiz
      </button>
    </>
  );
}

export default FinishScreen;
