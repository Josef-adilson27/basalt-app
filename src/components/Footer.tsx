

const CodeIcon1 = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="15"
    height="9"
    viewBox="0 0 15 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 9L0 4.5L4.5 0L5.56875 1.06875L2.11875 4.51875L5.55 7.95L4.5 9ZM10.5 9L9.43125 7.93125L12.8813 4.48125L9.45 1.05L10.5 0L15 4.5L10.5 9Z"
      fill="#64748B"
    />
  </svg>
);

const CodeIcon2 = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440624C0.734375 0.146874 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146874 14.5594 0.440624C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5ZM1.5 10.5H13.5V3H1.5V10.5ZM4.125 9.75L3.075 8.7L5.00625 6.75L3.05625 4.8L4.125 3.75L7.125 6.75L4.125 9.75ZM7.5 9.75V8.25H12V9.75H7.5Z"
      fill="#64748B"
    />
  </svg>
);

const Footer = () => {
  return (
    <div className="w-full py-8 px-4 flex flex-col lg:flex-row justify-between gap-6 border-t-[#224249] border-t-2 text-gray-500 text-xs sm:text-sm ">
      
      <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 text-center bg justify-center">
        <p>© 2024 BASALT ARENА</p>
        <span className="hidden md:inline">|</span>
        <p>ВРЕМЯ СЕРВЕРА: 14:02 UTC</p>
        <span className="hidden md:inline">|</span>
        <p>СБОРКА: v4.2.0-STABLE</p>
      </div>
      
      <div className="flex flex-wrap gap-4 sm:gap-5 items-center justify-center">
        <a href="#" className="hover:text-gray-700">API</a>
        <a href="#" className="hover:text-gray-700">КОНФИДЕНЦИАЛЬНОСТЬ</a>
        <a href="#" className="hover:text-gray-700">УСЛОВИЯ</a>
        <div className="flex gap-2">
          <CodeIcon1 className="w-4 h-4 sm:w-5 sm:h-5 hover:text-gray-700 transition-colors" />
        <CodeIcon2 className="w-4 h-4 sm:w-5 sm:h-5 hover:text-gray-700 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
