import { useState, useEffect, useCallback } from "react";

export function ExamTimerCounter() {
  const [countdown, setCountdown] = useState(24 * 60 * 60);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  const decrementCountdown = useCallback(() => {
    setCountdown((prevCountdown) => prevCountdown - 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(decrementCountdown, 1000);
    return () => clearInterval(interval);
  }, [decrementCountdown]);

  return (
    <div className="mt-2">
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
