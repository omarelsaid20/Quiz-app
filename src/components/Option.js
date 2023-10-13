function Option(props) {
  const hasAnswered = props.answer !== null;
  return (
    <div className="options">
      {props.question.options.map((option, i) => (
        <button
          key={i}
          className={`btn btn-option ${i === props.answer ? "answer" : ""} ${
            hasAnswered
              ? i === props.question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => props.dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
