import avatar from "../../assets/avatar.png"

const AdminSpeach = () => {
  return (
    <div className="w-full h-30 bg-[#1a2e33] rounded-2xl flex flex-col justify-between px-5 py-3  border border-[#224249]">
      <p className="text-white">
        «Хороший код — сам по себе награда, но золотая рамка тоже непомешает.»
      </p>
      <div className="flex gap-3">
        <img
          src={avatar}
          alt=""
          width={30}
          height={30}
          className="rounded-full bg-gray-700 border-1 border-amber-50"
        />
        <p className="text-[#0DCCF2]">— Администрация Арены</p>
      </div>
    </div>
  );
};

export default AdminSpeach;
