import React from "react";

interface ActionButtonProps {
 icon?: React.ReactElement;
  onClick?: () => void;
  text: string;
  colorType: "primaryButton" | "reset";
  buttonType: "submit" | "reset" | "button";
}

const ActionButton = ({
  text,
  icon,
  onClick,
  colorType,
  buttonType,
}: ActionButtonProps) => {
  const styles = {
    primaryButton: "bg-[#0DCCF2] text-black",
    reset: "text-gray-500",
  };

  return (
   <button
  type={buttonType}
  onClick={onClick}
  className={`
    font-medium
    px-5 py-2
    rounded-md flex items-center gap-2
    text-sm md:text-base

    ${styles[colorType]}
    transition-all duration-200
    active:scale-95  
    active:opacity-80 
    cursor-pointer
    shadow-[0_2px_8px_-2px_rgba(13,204,242,0.4)]
    hover:shadow-[0_4px_12px_-2px_rgba(13,204,242,0.6)]
  `}
>
  {icon && icon}
  <span className="whitespace-nowrap">{text}</span>
</button>
  );
};

export default ActionButton;