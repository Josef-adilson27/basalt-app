import type { UseFormRegisterReturn } from "react-hook-form";

const RememberMeInput = ({ register }: { register: UseFormRegisterReturn }) => {
  return (
    <div className="flex flex-row-reverse justify-end gap-2 items-center">
      <label className="flex items-center gap-2 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            id="saveSession"
             {...register}
            className="peer appearance-none w-4 h-4 border-2 border-[#224249] rounded-[4px] bg-[#1a2e33] checked:bg-[#288395] checked:border-[#288395] transition-all cursor-pointer"
          />
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black pointer-events-none hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-[#90C1CB] text-sm select-none">
          Запомнить меня на 30 дней
        </span>
      </label>
    </div>
  );
};

export default RememberMeInput;
