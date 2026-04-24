import { NavLink } from "react-router-dom";
import UpdateFormContainer from "../forms/UpdateForm/UpdateFormContainer";
import {
  AchievementIcon,
  CurvedArrowUpIcon,
  MoneyIcon,
  RangIcon,
  RightArrowIcon,
  SpintDoneIcon,
  Sprintcon,
  StarIcon,
  StraightArrowUpIcon,
} from "../Icons";
import AchievementContainer from "./AchievementContainer";
import AvatarBlock from "./AvatarBlock";
import { StatsCard } from "./StatCard";

const Profile = () => {
  return (
    <div className="flex flex-col items-center  w-full   sm:gap-10  gap-5">
      <AvatarBlock />
      {/* Статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full ">
        <StatsCard
          title="Баллы"
          value={0}
          percentValue={23}
          percentText="за месяц"
          icon={<StarIcon className="text-[#0DCCF2]" />}
          percentIcon={<CurvedArrowUpIcon />}
          colorScheme="green"
        />
        {/* Карточки рейтинга */}
        <StatsCard
          title="Глобальный ранг"
          value={3}
          percentValue={34}
          percentText="позиции"
          icon={<RangIcon className="text-[#0DCCF2]" />}
          percentIcon={<StraightArrowUpIcon />}
          colorScheme="green"
          valuePrefix="# "
        />
        <StatsCard
          title="Пройдено спринтов"
          value={2}
          percentValue={3}
          percentText="% Участия"
          icon={<Sprintcon className="text-[#0DCCF2]" />}
          percentIcon={<SpintDoneIcon />}
          colorScheme="sky"
        />
        <StatsCard
          title="Заработано денег"
          value={20000}
          percentValue={34}
          percentText="позиции"
          icon={<MoneyIcon className="text-[#0DCCF2]" />}
          percentIcon={<CurvedArrowUpIcon />}
          colorScheme="green"
          valueSuffix=" ₽"
        />
      </div>

      {/* Карточки достижений */}
      <>
        <div className="w-full flex flex-col gap-2">
          <div className="flex sm:justify-between justify-between gap-3">
            <div className="flex ms:gap-3 gap-1 text-white">
              <AchievementIcon />

              <b className="sm:text-2xl text-md">Галерея достижений</b>
            </div>
            <div className="flex items-center   sm:pl-9 pl-7 gap-3 text-gray-400 ">
              <NavLink to={"/"}>
                <p className="sm:text-xl ">Все достижения</p>
              </NavLink>
              <RightArrowIcon />
            </div>
          </div>
          <div className="h-[1px] w-full mt-2 border border-[#224249] rounded-[12px]" />
        </div>
        <AchievementContainer />
      </>

      <UpdateFormContainer />
    </div>
  );
};

export default Profile;
