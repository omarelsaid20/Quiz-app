import { useQuiz } from "../context/QuizContext";

function Option() {
  const { questions, answer, dispatch, index } = useQuiz();
  const question = questions.at(index);
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={i}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
