import TaskForm from "./TaskForm";
const SendTitleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.80272 15.5491V7.62876L4.276 10.1555L2.91545 8.74635L7.77454 3.88726L12.6336 8.74635L11.2731 10.1555L8.74636 7.62876V15.5491H6.80272ZM0 4.85908V1.94363C0 1.40913 0.190314 0.951565 0.570943 0.570936C0.951571 0.190308 1.40914 -6.67572e-06 1.94363 -6.67572e-06H13.6054C14.1399 -6.67572e-06 14.5975 0.190308 14.9781 0.570936C15.3588 0.951565 15.5491 1.40913 15.5491 1.94363V4.85908H13.6054V1.94363H1.94363V4.85908H0Z"
      fill="#00FF9D"
    />
  </svg>
);
const TaskFormContainer = () => {
  return (
    <div className="flex flex-col  gap-5 w-full  bg-[#203438] p-4 sm:p-6 rounded-md border-2 border-[#224249]">
      <div className="flex items-center gap-4 text-white font-bold">
        <SendTitleIcon />
        <h1 className="text-md  sm:text-lg ">Терминал для отправки</h1>
      </div>
      <TaskForm/>
    </div>
  );
};

export default TaskFormContainer;
