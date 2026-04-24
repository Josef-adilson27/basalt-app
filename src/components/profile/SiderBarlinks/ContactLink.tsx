const ContactLink = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactElement;
  label: string;
  value: string;
  href: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="gap-2 flex items-center">
        {icon}
        <span>{label}</span>
      </div>
      <a
        href={href}
        className="text-[#0DCCF2] hover:opacity-80 transition-opacity"
      >
        {value}
      </a>
    </div>
  );
};

export default ContactLink;