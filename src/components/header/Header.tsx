import NavbarButton from "../buttons/NavbarButton";
import BasaltLogo from "./BasaltLogo";
import avatar from "../../assets/avatar.png";

import AvatarBlock from "./HeaderAvatarBlock";
import NotificationBell from "./NotificationBell";
import { NavLink } from "react-router-dom";

const user = {
    name: "dev_architect",
    role: "Архитектор",
    avatar: avatar,
  };

const Header = () => {
  
  return (
    <div className="flex w-full justify-between items-center  sm:px-10  px-3 py-3 sm:py-4 md:py-5 border-b-1  border-b-[#224249]">
      <div className="flex items-center lg:gap-5 gap-2 ">
        <BasaltLogo />
        {/* Только логотип на мобилках, кнопки появляются с md */}
        <div className="hidden md:flex items-center  md:gap-1 lg:gap-10 ">
          <NavLink to="profile/sprint">
            <NavbarButton state="active" text="Активный спринт" />
          </NavLink>
          <NavLink to="profile/hall">
            <NavbarButton state="active" text="Зал славы" />
          </NavLink>
          <NavLink to="profile/dosc">
            <NavbarButton state="disabled" text="Документация" />
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        {/* <NotificationBell hasNotification={false}/> */}
        <NotificationBell hasNotification={true} />
        <AvatarBlock  user={user}/>
      </div>
    </div>
  );
};

export default Header;
