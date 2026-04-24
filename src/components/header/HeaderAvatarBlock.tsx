import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ArrowDown } from "../Icons";

type UserType = {
  role: string;
  name: string;
  avatar: string;
};

const AvatarBlock = ({ user }: { user: UserType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Обработчики для кнопок меню
  const handleProfileClick = () => {
    console.log("Переход в профиль");
    setIsOpen(false);
    navigate("/profile");
  };

  const handleSettingsClick = () => {
    console.log("Переход в настройки");
    setIsOpen(false);
    navigate("/");
  };

  const handleLogoutClick = () => {
    console.log("Выход из аккаунта");
     localStorage.removeItem('token');
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        className="h-[40px] flex items-center lg:gap-8 gap-3 text-sm cursor-pointer hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={user.avatar}
          className="md:w-[40px] md:h-[40px] md:rounded-[8px] h-[35px] w-[35px] rounded-[5px] border-2 border-emerald-700 object-cover shadow-[0_4px_10px_-2px_rgba(16,185,129,0.5)]"
          alt={user.name}
        />

        <div className="hidden md:flex flex-col items-start ">
          <b className="lg:text-xl text-[16px]  text-white">{user.name}</b>
          <p className="text-gray-500 text-md">{user.role}</p>
        </div>

        <ArrowDown
          className={`w-3 h-3 md:w-4 md:h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a2e33] border border-[#224249] rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="py-2">
            <button
              onClick={handleProfileClick}
              className="w-full px-4 py-2 text-left text-sm hover:bg-[#0DCCF21A] transition-colors"
            >
              Профиль
            </button>
            <button
              onClick={handleSettingsClick}
              className="w-full px-4 py-2 text-left text-sm hover:bg-[#0DCCF21A] transition-colors"
            >
              Настройки
            </button>
            <hr className="my-1 border-[#224249]" />
            <button
              onClick={handleLogoutClick}
              className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarBlock;
