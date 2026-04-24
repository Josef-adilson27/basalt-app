const TechnologiesCard = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center  text-gray-300  gap-2 bg-[#101F22] w-max py-1 px-3 rounded-[8px] border-[1px] border-[#3f455c]">
      {name}
    </div>
  );
};


export default TechnologiesCard;
