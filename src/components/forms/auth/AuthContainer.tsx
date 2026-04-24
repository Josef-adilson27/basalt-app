import { LockIcon } from "../../Icons";
import LoginForm from "./LoginForm";

const AuthContainer = () => {
  return (
    <div className="flex flex-col gap-10 sm:w-[450px] w-[300px] border bg-gradient-to-br from-[#162a2e] to-[#0f1f22] border-[#224249] rounded-2xl sm:p-6 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
      <div className="flex justify-between items-center mt-3">
        <h1 className="sm:text-2xl text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Авторизация
        </h1>
        <LockIcon className="text-[#0DCCF2] drop-shadow-glow" />
      </div>
      <div className="sm:mt-6 mt-4">
        <LoginForm />
      </div>
    </div>
  );
};
export default AuthContainer;
