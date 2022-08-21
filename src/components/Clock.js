import { useState, useEffect, useRef } from 'react';

export const Clock = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [color, setColor] = useState('#ee7c78');
  const [mode, setMode] = useState('pomodoro');
  const [countdown, setCountdown] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (countdown === false) {
      return;
    }

    const id = setInterval(() => {
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

    return () => {
      clearInterval(id);
    };
  }, [countdown]);

  const switchView = (view) => {
    switch (view) {
      case 'pomodoro':
        setMinutes(25);
        setSeconds(0);
        setColor('#ee7c78');
        setMode(view);
        break;
      case 'shortBreak':
        setMinutes(5);
        setSeconds(0);
        setColor('#336699');
        setMode(view);
        break;
      case 'longBreak':
        setMinutes(15);
        setSeconds(0);
        setColor('#009900');
        setMode(view);
        break;
      default:
        return null;
    }
  };

  const handleClick = () => {
    setCountdown(!countdown);
  };

  return (
    <div className="m-auto flex justify-center align-middle max-w-[620px]">
      <div
        className={`max-w-[480px] w-full pt-5 pb-6 rounded-md`}
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center align-middle">
          <button
            className={`btn-clock ${mode === 'pomodoro' && 'btn-active'}`}
            onClick={() => switchView('pomodoro')}
          >
            Pomodoro
          </button>
          <button
            className={`btn-clock ${mode === 'shortBreak' && 'btn-active'}`}
            onClick={() => switchView('shortBreak')}
          >
            Short Break
          </button>
          <button
            className={`btn-clock ${mode === 'longBreak' && 'btn-active'}`}
            onClick={() => switchView('longBreak')}
          >
            Long Break
          </button>
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
