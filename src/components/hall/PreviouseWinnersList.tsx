import { ArrowDown } from "../Icons";

const PreviouseWinnersList = () => {
  const users = [
    { id: 1, name: "Task1", username: "@Ray" },
    { id: 2, name: "Task2", username: "@jonh" },
    { id: 3, name: "Task3", username: "@adam" },
    { id: 4, name: "Task4", username: "@maximus" },
  ];

  return (
    <div className="w-full bg-[#1a2e33] rounded-2xl flex flex-col px-5 py-3 border border-[#224249]">
      {users.map((user, index) => (
        <div key={user.id}>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-[10px] font-medium text-gray-400 border border-[#2e5a64] w-10 h-10 bg-[#181d33]">
                <p>#{user.id}</p>
              </div>
              <div>
                <p className="font-medium text-white">{user.name}</p>
                <p className="text-[#0DCCF2]">{user.username}</p>
              </div>
            </div>
            <div>
              <ArrowDown className="rotate-270 w-3" />
            </div>
          </div>
          {/* Линия после каждого элемента, кроме последнего */}
          {index < users.length - 1 && (
            <div className="border-t border-[#224249] my-1" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PreviouseWinnersList;