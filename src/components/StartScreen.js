function StartScreen(props) {
  return (
    <div>
      <div className="start">
        <h2>Welcome to The React Quiz!</h2>
        <h3>{props.numQuestions} questions to test your React mastery</h3>
        <button
          className="btn btn-ui"
          onClick={() => props.dispatch({ type: "start" })}
        >
          Let's start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
