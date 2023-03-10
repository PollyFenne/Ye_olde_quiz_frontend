import React, { useEffect, useState } from "react";

const Timer = ({ handleTimerSubmit, isRoundComplete }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // console.log(isRoundComplete);

  useEffect(() => {
    if (isRoundComplete) {
      setTimeLeft(120);
      setIsTimeUp(false);
    }
  }, [isRoundComplete]);

  const handleTimer = (endTime) => {
    setIsTimeUp(true);
    setInterval(endTime);
    handleTimerSubmit();
  };

  useEffect(() => {
    if (!isTimeUp) {
      const endTime = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else if (timeLeft == 0) {
          clearInterval(endTime);
          handleTimer(endTime);
        }
      }, 1000);
      return () => clearInterval(endTime);
    }
  }, [timeLeft, isTimeUp]);

  return <div className="time-left">Time left: {timeLeft} seconds</div>;
};

export default Timer;
