import {  ArchitectorIcon, CalendarIcon, FirstIcon, InvisibleIcon,} from "../Icons";
import AchievementCard from "./AchievementCard";


const AchievementContainer = () => {
  return (
    <>
      

      <div className="grid grid-cols-2  lg:grid-cols-4 gap-2 w-full">
        <AchievementCard
          title={"Газующий"}
          description={"Не пропустил ни одного спринта"}
          icon={<CalendarIcon />}
        />
        <AchievementCard
          title={"Архитектор"}
          description={"Создатель Basalt Arena"}
          icon={<ArchitectorIcon />}
        />
        <AchievementCard
          title={"Первый"}
          description={"Выложил решение первым"}
          icon={<FirstIcon />}
        />
        <AchievementCard
          title={"Невидимка"}
          description={"Ни разу не участвовал"}
          icon={<InvisibleIcon />}
          invisable={true}
        />
      </div>
    </>
  );
};

export default AchievementContainer;
