
import taskMetricDoneIcon from "../../assets/taskMetricDoneIcon.svg";


const TasksSuccesMetric = ({succesTasksCount, percentOfSuccesTasks=10}:{succesTasksCount:number,percentOfSuccesTasks: number}) => {
    return (
          <div className="w-full h-42.5 bg-[#1a2e33] rounded-2xl flex flex-col justify-between px-5 py-3  border border-[#224249]">
      <div className="flex justify-between">
        <h1 className="text-white">Доля успешных</h1>
        <img src={taskMetricDoneIcon} alt="" width={18} />
      </div>
      <h1 className='text-3xl font-bold text-gray-400'>{`${succesTasksCount} %`}</h1>
      <div className="flex items-center gap-2 bg-[#1E293B] p-2 rounded-[10px]">
        <div className='w-[10px] h-[10px] bg-green-600 rounded-3xl'/>
        <small className="text-[#94A3B8]">{`${percentOfSuccesTasks} проверенных решений`}</small>
      </div>
    </div>
    );
}

export default TasksSuccesMetric;
