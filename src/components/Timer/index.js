import React, { useEffect, useState } from "react";

const Timer = ({ handleTimerSubmit }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);

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

  return <div>Time left: {timeLeft} seconds</div>;
};

export default Timer;
