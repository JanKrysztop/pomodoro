export const Clock = () => {
  return (
    <div className="bg-[#e9d5d4] m-auto flex justify-center align-middle max-w-[620px]">
      <div className="max-w-[480px] w-full bg-[#f08c89] pt-5 pb-6 rounded-md">
        <div className="flex justify-center align-middle">
          <button className="rounded border-none text-base py-0.5 px-3 h-7 cursor-pointer text-white">
            Pomodoro
          </button>
          <button className="rounded border-none text-base py-0.5 px-3 h-7 cursor-pointer text-white">
            Short Break
          </button>
          <button className="rounded border-none text-base py-0.5 px-3 h-7 cursor-pointer text-white">
            Long Break
          </button>
        </div>
      </div>
    </div>
  );
};
