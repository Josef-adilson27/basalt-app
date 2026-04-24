
interface ActionButtonProps {
  icon?: React.ReactElement;
  onClick?: () => void;
  text: string;
  link: string;
}

const SideLinkButton = ({ icon, onClick, text, link }: ActionButtonProps) => {
  return (
    <a href={link}>
      <button
        type="button"
        className="sm:px-3  px-3 py-1 text-gray-100 rounded-md inline-flex  cursor-pointer items-center gap-2  h-11.25 border-2 border-[#224249]"
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
    </a>
  );
};

export default SideLinkButton;
