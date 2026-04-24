import SystemStatus from "../components/breef/SystemStatus";
import TaskCard from "../components/breef/taskCard/TaskCard";
import Timer from "../components/breef/Timer";

import TaskFormContainer from "../components/forms/taskForm/taskFormContainer";
import UserScoreContainer from "../components/hall/UserScoreContainer";
import { NetIcon } from "../components/Icons";

const SprintLayout = () => {
  return (
    <div className="w-full  flex flex-col items-center gap-10 my-10">
      <div className="w-full  flex justify-between items-center">
        <div className="flex items-center gap-2">
          <NetIcon />
          <h1 className=" text-white font-bold">#2 BASALT ARENA (FRONTEND)</h1>
        </div>
        <SystemStatus status="active" />
      </div>

      <Timer />

      <div className="flex  w-full gap-5 min-h-[300px] max-[1440px]:flex-col ">
        {/* Левая часть - задача */}
        <TaskCard />

        {/* Правая часть - форма и счет */}
        <div className="w-[450px] max-[1440px]:w-full flex flex-col gap-3">
          <TaskFormContainer />
          <UserScoreContainer scores={12} position={3} />
        </div>
      </div>
    </div>
  );
};

export default SprintLayout;
