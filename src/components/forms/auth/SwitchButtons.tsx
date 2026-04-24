
import { CodeArrowsIcon, TgLinkArrowIcon } from '../../Icons';


const SwitchButtons = () => {
  const handleMockUnavailable = (provider: string) => {
    alert(`🔒 Функционал "${provider}" пока не доступен в демо-режиме.`);
  };

  return (
    <div className="h-10 flex justify-center gap-2 text-white">
      <button
        type="button"
        onClick={() => handleMockUnavailable("GitHub")}
        className="flex items-center justify-center gap-2 w-[150px] h-full border-2 border-[#224249] rounded-[8px] hover:border-[#0DCCF2] hover:bg-[#0DCCF2]/10 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <CodeArrowsIcon className="text-2xl h-10 w-5" />
        GitHub
      </button>

      <button
        type="button"
        onClick={() => handleMockUnavailable("Telegram")}
        className="flex items-center justify-center gap-2 w-[150px] h-full border-2 border-[#224249] rounded-[8px] hover:border-[#0DCCF2] hover:bg-[#0DCCF2]/10 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <TgLinkArrowIcon className="text-2xl h-8 w-4" />
        Telegram
      </button>
    </div>
  );
};

export default SwitchButtons;
