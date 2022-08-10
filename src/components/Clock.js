export const Clock = () => {
  return (
    <div className="bg-[#e9d5d4] m-auto flex justify-center align-middle max-w-[620px]">
      <div className="max-w-[480px] w-full bg-[#ee7c78] pt-5 pb-6 rounded-md">
        <div className="flex justify-center align-middle">
          <button className="btn-clock">Pomodoro</button>
          <button className="btn-clock">Short Break</button>
          <button className="btn-clock">Long Break</button>
        </div>
        <div className="text-9xl font-bold mt-5 text-white text-center">
          25:00
        </div>
        <div className="justify-center flex">
          <button className="cursor-pointer border-none mt-5 px-3 rounded shadow-[0_6px_0_rgb(235,235,235)] bg-white text-2xl font-bold text-[#d95550] h-14 w-52 ">
            START
          </button>
        </div>
      </div>
    </div>
  );
};
