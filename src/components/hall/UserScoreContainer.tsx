

const UserScoreContainer = ({
  scores,
  generalCount = 10,
  position,
}: {
  scores: number;
  generalCount?: number;
  position: number;
}) => {
  return (
    <div className="w-full rounded-xl border border-[#224249] flex justify-between p-5 px-5  border border-[#224249]">
      <div>
        <p className="text-[#90C1CB]">Ваша позиция</p>
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold text-white">{`#${position}`}</p>
          <p className="text-[#00FF9D]">{`/${generalCount}`}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end ">
        <p className="text-[#90C1CB]">Очков заработано</p>
        <p className="text-2xl text-end font-bold text-[#0DCCF2]">{scores}</p>
      </div>
    </div>
  );
};

export default UserScoreContainer;