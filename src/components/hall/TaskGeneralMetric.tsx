import taskMetricUpArrow from "../../assets/taskMetricUpArrow.svg";
import taskMetricWindowIcon from "../../assets/taskMetricWindowIcon.svg";


const SimpleProgressBar = ({ progress = 50 }) => {
  return (
    <div className="w-full bg-[#1E293B] rounded-full h-2">
      <div
        className="bg-[#0DCCF2] h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const TaskGeneralMetric = ({progres, sendedTaskCount, percentForPrevTasks=10}:{progres:number, sendedTaskCount:number ,percentForPrevTasks: number}) => {
  return (
    <div className="w-full h-42.5 bg-[#1a2e33] rounded-2xl flex flex-col justify-between px-5 py-3  border border-[#224249]">
      <div className="flex justify-between">
        <p className="text-white">Всего отправок</p>
        <img src={taskMetricWindowIcon} alt="" width={18} />
      </div>
      <h1 className='text-3xl font-bold text-gray-300'>{sendedTaskCount}</h1>
      <SimpleProgressBar progress={progres} />
      <div className="flex gap-2">
        <img src={taskMetricUpArrow} alt="" width={10} />
        <small className="text-[#4ADE80]">{`+ ${percentForPrevTasks} к прошлому спринту`}</small>
      </div>
    </div>
  );
};

export default TaskGeneralMetric;