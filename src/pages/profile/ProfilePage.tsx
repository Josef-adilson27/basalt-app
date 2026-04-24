
import {
  Clockicon,
  CodeArrowsIcon,
  EmaiLetterlIcon,
  PensilIcon,
  Settingsicon,
  Statisticon,
  TgLinkArrowIcon,
  UserIcon,
  WinnerMedalIcon,
} from "../../components/Icons";
import SideBarLink from "../../components/profile/SiderBarlinks/SideBarLink";
import ContactLink from "../../components/profile/SiderBarlinks/ContactLink";
import {  Outlet } from "react-router-dom";

const ProfilePage = () => {
  const navLinks = [
    { text: "Обзор", to: "/", icon: <UserIcon /> },
    { text: "Бейджи и достижения", to: "/profile/achivements", icon: <WinnerMedalIcon /> },
    { text: "Статистика", to: "/profile/statistic", icon: <Statisticon /> },
    { text: "История спринтов", to: "/profile/history", icon: <Clockicon /> },
    { text: "Настройки", to: "/profile/settings", icon: <Settingsicon /> },
  ];

  const contacts = [
    {
      icon: <TgLinkArrowIcon className="w-4 h-4" />,
      label: "telegram",
      value: "@dev_arch",
      href: "#",
    },
    {
      icon: <EmaiLetterlIcon className="w-4 h-4" />,
      label: "email",
      value: "@dev_arch",
      href: "#",
    },
    {
      icon: <CodeArrowsIcon className="w-4 h-4" />,
      label: "github",
      value: "@dev_arch",
      href: "#",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col  sm:gap-10 gap-5">

      {/* Левая боковая панель */}
      <div className="lg:w-[350px] flex flex-col sm:gap-8 gap-3 w-full">

        <div className="flex flex-col w-full items-start sm:gap-10 gap-5">
          {navLinks.map((link, index) => (
            <SideBarLink
              key={index}
              text={link.text}
              to={link.to}
              icon={link.icon}
            />
          ))}
        </div>
          
        {/* Блок контактов */}
        <div className="flex flex-col gap-5 border text-gray-400 border-[#224249] rounded-[12px] py-3 px-2 bg-[#14262a]">
          <div className="flex justify-between items-center">
            <h3 className="text-xl">Контакты</h3>
            <PensilIcon className="w-4 h-4 text-[#0DCCF2] cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
          <div className="flex flex-col gap-8 px-3  pb-5 ">
            {contacts.map((contact, index) => (
              <ContactLink
                key={index}
                icon={contact.icon}
                label={contact.label}
                value={contact.value}
                href={contact.href}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Правая основная секция (профиль)*/}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
