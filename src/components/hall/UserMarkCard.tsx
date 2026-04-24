import avatar from "../../assets/avatar.png";

import {
  CodeArrowsIcon,
  LikeIcon,
  RocketIcon,
  TgLinkArrowIcon,
  WinnerMedalIcon,
} from "../Icons";

const COLOR_SCHEMES = {
  first: {
    // Для rate === 1
    card: {
      border: "border-amber-500",
      shadow:
        "shadow-[0_0_10px_rgba(245,158,11,0.5)] hover:shadow-[0_0_15px_rgba(245,158,11,0.8)]",
    },
    badge: "bg-amber-500",
    likes: {
      bg: "bg-sky-600/10",
      border: "border-sky-300",
      text: "text-sky-300",
    },
  },
  default: {
    // Для остальных rate (серый)
    card: {
      border: "border-[#224249]",
      shadow: "",
    },
    badge: "bg-gray-500",
    likes: {
      bg: "bg-gray-600/50",
      border: "border-gray-500",
      text: "text-gray-300",
    },
  },
} as const;

const user1 = {
  name: "Nakir",
  avatar: avatar,
  date: "14 мая 2026",
  tgLink: "@nakir",
  mentorRating: 100,
  likes: 8,
  rate: 1,
};

type UserType = {
  name: string;
  avatar: string;
  date: string;
  tgLink: string;
  mentorRating: number;
  likes: number;
  rate: number;
};

const ActionLinks = ({ rate }: { rate: number }) => {
  const isFirst = rate === 1;

  return (
    <div className="rounded-lg border-2 border-[#224249] text-gray-400">
      <div className="flex text-sm items-center justify-between h-10 sm:h-12">
        <a href="#" className="">
          <div className="flex items-center px-4 sm:px-3 gap-1 sm:gap-1.5">
            <CodeArrowsIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            {isFirst && "КОД"}
          </div>
        </a>
        <div className="h-[40%] sm:h-[60%] border-r border-[#224249]" />
        <a href="#" className="">
          <div className="flex items-center px-4 sm:px-3 gap-1 sm:gap-1.5">
            <RocketIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            {isFirst && "DEMO"}
          </div>
        </a>
      </div>
    </div>
  );
};

const MentorRating = ({ rating }: { rating: number }) => (
  <p className="text-amber-500 ">
    Оценка наставника: <span>{rating}</span>
  </p>
);

const LikesBlock = ({ user }: { user: UserType }) => {
  const isFirst = user.rate === 1;
  const scheme = isFirst ? COLOR_SCHEMES.first : COLOR_SCHEMES.default;

  return (
    <div
      className={`flex justify-center items-center rounded-lg border w-[50px] h-[40px] sm:w-[60px] sm:h-[48px] ${scheme.likes.bg} ${scheme.likes.border}`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <LikeIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${scheme.likes.text}`} />
        <p className={`text-sm sm:text-base ${scheme.likes.text}`}>
          {user.likes}
        </p>
      </div>
    </div>
  );
};

const UserInfo = ({ user }: { user: UserType }) => {
  const isFirst = user.rate === 1;
  const scheme = isFirst ? COLOR_SCHEMES.first : COLOR_SCHEMES.default;

  return (
    <div className="flex gap-5  items-center ">
      {/* Аватар */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-5 h-5 flex justify-center items-center ${scheme.badge} absolute right-[-5px] top-[-5px] rounded-[2px] text-white text-[10px]  font-bold`}
        >
          {user.rate}
        </div>
        <img
          src={user.avatar}
          className="w-[60px] h-[60px]  rounded-[6px] sm:rounded-[8px] border-2 border-[#047857] object-cover"
          alt="avatar"
        />
      </div>

      {/* Информация о пользователе */}
      <div className="flex flex-col min-w-[100px]">
        <div className="flex gap-1 sm:gap-2 items-center">
          <p className="text-2xl font-medium text-white">{user.name}</p>
          {isFirst && <WinnerMedalIcon className="w-4 h-4 text-orange-400" />}
        </div>
        <p className=" text-gray-400">{user.date}</p>
        <div className="flex items-center gap-[2px] text-sky-300">
          <TgLinkArrowIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          <small className="">{user.tgLink}</small>
        </div>
      </div>
    </div>
  );
};

// Основной компонент
const UserMarkCard = ({ user = user1 }: { user?: UserType }) => {
  const isFirst = user.rate === 1;
  const scheme = isFirst ? COLOR_SCHEMES.first : COLOR_SCHEMES.default;

  return (
    <div
      className={`
      bg-[#1a2e33] 
       flex justify-between
       min-h-[130px]
       rounded-[10px]
       px-5
       py-5
       gap-5
       max-[500px]:flex-col
        max-[500px]:items-start
        max-[500px]:px-2
        ${scheme.card.border} ${scheme.card.shadow}
      `}
    >
      {/* Левая секция: профиль и оценка */}
      <div className="flex items-center gap-5  flex-row max-sm:flex-col">
        <UserInfo user={user} />
        <MentorRating rating={user.mentorRating} />
      </div>

      {/* Правая секция: действия */}
      <div className="flex items-center gap-5">
        <ActionLinks rate={user.rate} />
        <LikesBlock user={user} />
      </div>
    </div>
  );
};

export default UserMarkCard;
