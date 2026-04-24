import React from "react";

type AchievementData = {
  title: string;
  description: string;
  icon: React.ReactElement;
  invisable?: boolean;
};
const AchievementCard = ({ title, description, icon, invisable = false }: AchievementData) => (
  <div className={`
    flex flex-col items-center w-full gap-2 sm:gap-3 
    p-3 sm:p-5 rounded-[12px] transition-all duration-200
    ${invisable 
      ? 'border border-[#6a1d26] border-dashed bg-[#6a1d26]/20' 
      : 'border border-[#2d555f] bg-[#132427]'
    }
    hover:bg-amber-50/10 active:scale-95
  `}>
    <div className={`
      flex justify-center items-center 
      w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] 
      border rounded-[50%] bg-[#395c6333]
      ${invisable ? 'border-[#6a1d26]' : 'border-[#2d555f]'}
    `}>
      {icon}
    </div>
    <div className="text-center">
      <h1 className="text-lg sm:text-xl font-medium text-white">{title}</h1>
      <p className="text-sm sm:text-md text-gray-400 mt-0.5 sm:mt-1">{description}</p>
    </div>
  </div>
);

export default AchievementCard;