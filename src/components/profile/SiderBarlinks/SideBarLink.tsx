import { NavLink } from "react-router-dom";

const SideBarLink = ({
  to,
  text,
  disabled = false,
  icon,
}: {
  to: string;
  text: string;
  disabled?: boolean;
  icon?: React.ReactElement;
}) => {
  if (disabled) {
    return (
      <div className="w-full py-2 px-3 rounded-[8px] cursor-not-allowed text-gray-500/50 bg-transparent">
        <span>{text}</span>
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        w-full py-2 px-3 rounded-[8px] cursor-pointer transition-colors block flex items-center gap-2  
        ${
          isActive
            ? "bg-[#0DCCF21A] border border-[#34d7f874] text-[#34d7f8fc]"
            : "bg-transparent text-gray-400 hover:text-[#34d7f8fc] hover:bg-[#0DCCF21A]"
        }
      `}
    >
      {icon}
      {text}
    </NavLink>
  );
};



export default SideBarLink;
