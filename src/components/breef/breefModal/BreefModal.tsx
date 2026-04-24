import {
  ChatIcon,
  CodeArrowsIcon,
  CriteriaIcon,
  DoneIcon,
  ExitCrossIcon,
  FileIcon,
  RocketIcon,
} from "../../Icons";
import TaskDescription from "../taskCard/TaskDescription";

import TechnologiesCard from "../TechnologiesCard";
import SideLinkButton from "../../buttons/SideLinkButton";

import ActionButton from "../../buttons/ActionButton";

const BreefModal = ({
  description,
  tecnologies,
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  description: [];
  tecnologies: [];
}) => {
  const handleBackToHall = () => {
    onClose();
  };

  const handleClose = () => {
    onClose();
  };
  console.log(description);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-screen p-2 bg-black/40 backdrop-blur-sm sm:p-4">
      <div className="flex flex-col w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] bg-gradient-to-br from-[#0c292f] via-[#07262b] to-[#022429] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
        {/* header */}
        <div className="flex-shrink-0 flex items-center justify-between gap-2 p-3 sm:p-6 sm:gap-5 bg-gradient-to-r from-[#0a3a42]/30 to-transparent backdrop-blur-sm">
          <div className="flex gap-2 sm:gap-5 min-w-0">
            <div className="flex-shrink-0 p-2 rounded-xl sm:p-4 bg-gradient-to-br from-[#0dccf2]/20 to-[#0dccf2]/5 shadow-lg shadow-[#0dccf2]/10">
              <FileIcon className="w-4 h-4 sm:w-6 sm:h-6 text-[#0dccf2] drop-shadow-glow" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-400/80 sm:text-sm tracking-wide">
                Бриф спринта
              </p>
              <h1 className="text-xs font-semibold truncate sm:text-base lg:text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Basalt Arena (frontend)
              </h1>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Закрыть модальное окно"
            title="Закрыть"
            className="flex-shrink-0 p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0DCCF2] focus:ring-offset-2 focus:ring-offset-[#07282e]"
          >
            <ExitCrossIcon className="flex-shrink-0 w-4 h-4 text-gray-400 sm:w-5 sm:h-5 cursor-pointer hover:text-white transition-colors" />
          </button>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto px-3 pb-4 sm:px-6 sm:pb-8 md:px-10 custom-scrollbar">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tecnologies.map((item, index) => (
                <TechnologiesCard key={index} name={item} />
              ))}
            </div>

            <div className="min-w-0 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/5 shadow-inner">
              <TaskDescription />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <CriteriaIcon className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#0DCCF2] drop-shadow-glow" />
              <p className="text-base sm:text-xl md:text-2xl bg-gradient-to-r from-[#0DCCF2] to-[#0dccf2]/60 bg-clip-text text-transparent font-semibold">
                Критерии приёмки
              </p>
            </div>

            <ul className="text-[#90C1CB] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <DoneIcon className="flex-shrink-0 w-4 h-4 mt-0.5 text-[#00FF9D]" />
                <span>
                  Главное —{" "}
                  <span className="text-[#00FF9D] font-medium drop-shadow-[0_0_3px_rgba(0,255,157,0.3)]">
                    соответствие макету.
                  </span>{" "}
                  Чем точнее, тем выше оценка наставника.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DoneIcon className="flex-shrink-0 w-4 h-4 mt-0.5 text-[#00FF9D]" />
                <span>
                  Весь независимый от бэка JS-функционал{" "}
                  <span className="text-[#00FF9D] font-medium">должен</span>{" "}
                  работать: модалки, таймер, табы, формы и т.д.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <DoneIcon className="flex-shrink-0 w-4 h-4 mt-0.5 text-[#00FF9D]" />
                <span>
                  Все запросы к серверу — через{" "}
                  <span className="text-[#00FF9D] font-medium">мок-API</span>{" "}
                  (заглушки). На основе победившего мок-API в следующем спринте
                  будем проектировать настоящий бэкенд.
                </span>
              </li>
            </ul>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#224249] to-transparent" />

            <p className="text-sm font-bold text-gray-300 sm:text-base tracking-wide">
              🔗 Полезные ссылки
            </p>

            {/* link buttons */}
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
              <SideLinkButton
                text="Figma-макет"
                link="/"
                icon={<FileIcon className="w-4 h-4 sm:w-6 sm:h-6" />}
              />
              <SideLinkButton
                text="Гайд по мок-API"
                link="/"
                icon={<CodeArrowsIcon className="w-4 h-4 sm:w-6 sm:h-6" />}
              />
              <SideLinkButton
                text="Чат участников"
                link="/"
                icon={<ChatIcon className="w-4 h-4 sm:w-6 sm:h-6" />}
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex-shrink-0 flex flex-col-reverse gap-2 p-3 sm:flex-row sm:items-center text-[#90C1CB] sm:justify-between sm:p-6 bg-gradient-to-r from-[#224249] via-[#1a3a40] to-[#224249] border-t border-white/10 shadow-lg">
          <button
            type="button"
            onClick={handleBackToHall}
            className="w-full px-3 py-2 text-md transition-all duration-200 rounded-lg sm:w-auto sm:px-4 hover:bg-white/10 hover:scale-105 active:scale-95 group"
          >
            <span className="group-hover:translate-x-[-4px] inline-block transition-transform">
              ←
            </span>{" "}
          
            Назад в зал славы
          </button>

          <ActionButton
            buttonType="button"
            colorType="primaryButton"
            text="Перейти к спринту"
            icon={<RocketIcon />}
          />
        </div>
      </div>
    </div>
  );
};
export default BreefModal;
