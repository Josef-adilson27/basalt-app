import type { ReactNode } from "react";



// Типы для цветовых схем
type ColorScheme = "green" | "sky" | "purple" | "orange";

const colorConfig = {
  green: {
    bg: "bg-green-400/10",
    text: "text-green-400",
    border: "border-green-400",
  },
  sky: {
    bg: "bg-sky-400/10",
    text: "text-sky-400",
    border: "border-sky-400",
  },
  purple: {
    bg: "bg-purple-400/10",
    text: "text-purple-400",
    border: "border-purple-400",
  },
  orange: {
    bg: "bg-orange-400/10",
    text: "text-orange-400",
    border: "border-orange-400",
  },
};

interface StatsCardProps {
  title: string; // Заголовок карточки
  value: number | string; // Основное значение
  percentValue: number; // Значение процента/изменения
  percentText: string; // Текст для процентов (например: "за месяц", "позиции")
  icon: ReactNode; // Иконка справа вверху
  percentIcon?: ReactNode; // Иконка рядом с процентами (опционально)
  colorScheme?: ColorScheme; // Цветовая схема для блока с процентами
  valuePrefix?: string; // Префикс перед значением (например: "# ")
  valueSuffix?: string; // Суффикс после значения
}

export const StatsCard = ({
  title,
  value,
  percentValue,
  percentText,
  icon,
  percentIcon,
  colorScheme = "green",
  valuePrefix = "",
  valueSuffix = "",
}: StatsCardProps) => {
  const colors = colorConfig[colorScheme];

  return (
    <div className="relative flex w-full justify-between sm:h-42.5 h-35  text-[1.4em] p-1 px-5 border border-[#224249] rounded-[12px] hover:bg-amber-50/10 transition-colors">
      <div className="flex flex-col gap-1 justify-between py-2  ">
        <p className="text-md sm:text-xl text-gray-400">{title}</p>
       <p className="text-xl sm:text-2xl font-bold  text-white">
          {valuePrefix}
          {value}
          {valueSuffix}
        </p>
        <div
          className={`flex items-center gap-1 w-max text-[16px] px-[12px] py-[3px] ${colors.bg} ${colors.text} border ${colors.border} rounded-[8px]`}
        >
          {percentIcon}
          <p>
            +{percentValue} {percentText}
          </p>
        </div>
      </div>
      <div className=" absolute right-0 min-w-[80px] mt-4 z-[-1]">{icon}</div>
    </div>
  );
};
