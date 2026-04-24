import SideLinkButton from "../../buttons/SideLinkButton";
import { ButtonFileIcon, ChainIocon, CodeIcon, FileIcon } from "../../Icons";
import AcceptanceCriteria from "./AcceptanceCriteria";
import TaskDescription from "./TaskDescription";


const TaskCard = () => {
  return (
    <div className="flex-1 bg-[#0DCCF20D] rounded-xl sm:p-10 p-4 flex flex-col gap-4 sm:gap-5">
      <div className="flex items-center gap-3 sm:gap-7 text-white">
        <FileIcon className="w-6 h-6 sm:w-6 sm:h-6" />
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold">
          Текущая задача: Basalt Arena (frontend)
        </h1>
      </div>
      <TaskDescription />
      <AcceptanceCriteria />

           <div className="flex gap-2">  
             <SideLinkButton text="Платформенный SDK v2.1"  link="/" icon={<CodeIcon className="w-5 h-5 sm:w-5 sm:h-5 text-gray-300" />}  />
             <SideLinkButton text="Спецификация Quantum"  link="/" icon={<ButtonFileIcon className="w-5 h-5 sm:w-5 sm:h-5 text-gray-300" />}  />
             <SideLinkButton text="Репозиторий тестов"  link="/" icon={<ChainIocon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />}  />
        </div>
    </div>
  );
};
export default TaskCard;
