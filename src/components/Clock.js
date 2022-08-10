import { useState, useEffect } from 'react';

export const Clock = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  if (countdown) {
    const interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setMinutes(minutes);
          setSeconds(seconds);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }

  const handleClick = () => {
    setCountdown(!countdown);
  };

  return (
    <div className="bg-[#e9d5d4] m-auto flex justify-center align-middle max-w-[620px]">
      <div className="max-w-[480px] w-full bg-[#ee7c78] pt-5 pb-6 rounded-md">
        <div className="flex justify-center align-middle">
          <button className="btn-clock">Pomodoro</button>
          <button className="btn-clock">Short Break</button>
          <button className="btn-clock">Long Break</button>
        </div>
        <div className="text-9xl font-bold mt-5 text-white text-center">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className="justify-center flex">
          {countdown ? (
            <button
              className="cursor-pointer border-none mt-5 px-3 rounded bg-white text-2xl font-bold text-[#d95550] h-14 w-52 translate-y-[6px]"
              onClick={handleClick}
            >
              STOP
            </button>
          ) : (
            <button
              className="cursor-pointer border-none mt-5 px-3 rounded shadow-[0_6px_0_rgb(235,235,235)] bg-white text-2xl font-bold text-[#d95550] h-14 w-52 "
              onClick={handleClick}
            >
              START
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
