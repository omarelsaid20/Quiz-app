import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, remainSeconds } = useQuiz();
  const mins = Math.floor(remainSeconds / 60);
  const seconds = remainSeconds % 60;
  console.log(remainSeconds / 60);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"} {seconds}
    </div>
  );
}

export default Timer;
