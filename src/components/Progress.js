function Progress({ index, answer, numQuestions, allPossiblePoints, points }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        points <strong>{points}</strong>/{allPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
