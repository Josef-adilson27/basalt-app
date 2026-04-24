interface NavbarButtonProps {
  state: "active" | "disabled";
  text?: string;
  onClick?: () => void;
  className?: string;
}

const stateStyles = {
  active: "  bg-transparent text-gray-400 hover:text-[#34d7f8fc] hover:bg-[#0DCCF21A]  rounded-[5px] cursor-pointer transition-colors text-gray-400 text-[12px] md:text-[14px] px-2 w-max  h-[24px] sm:h-[28px] md:h-[36px] lg:h-[40px]   font-medium",
  disabled: "text-gray-600 opacity-60 cursor-not-allowed",
};

const NavbarButton = ({
  state,
  text,
  onClick,
  className = "",
}: NavbarButtonProps) => {
  return (
    <button
      className={`${stateStyles[state]} ${className}`}
      type="button"
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {text}
    </button>
  );
};


export default NavbarButton;
