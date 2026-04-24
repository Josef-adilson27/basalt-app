import { EnterButtonIcon } from "../../Icons";

const LoginButton = ({ isSubmitting }: { isSubmitting?: boolean; isLoading?: boolean }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full h-[45px] rounded-[10px] gap-3 bg-gradient-to-r from-[#0DCCF2] to-[#0ab8d9] flex justify-center items-center hover:from-[#0ab8d9] hover:to-[#09a4c4] transition-all duration-200 active:scale-95 active:opacity-80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-lg shadow-[#0DCCF2]/20"
    >
      {isSubmitting ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <EnterButtonIcon className="w-5 h-5" />
      )}
      <span className="font-medium">{isSubmitting ? "Вход..." : "Войти в арену"}</span>
    </button>
  );
};

export default LoginButton;