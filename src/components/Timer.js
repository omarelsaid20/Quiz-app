import { useEffect } from "react";

function Timer({ dispatch, remainSeconds }) {
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
      {mins}:{seconds}
    </div>
  );
}

export default Timer;
