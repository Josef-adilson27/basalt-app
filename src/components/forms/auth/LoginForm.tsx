import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserIcon,
  KeyIcon
} from "../../Icons";
import { loginSchema, type LoginFormData } from "./schema";
import { useForm } from "react-hook-form";
import LoginFormInput from "./LoginFormInput";
import { useNavigate } from "react-router-dom";
import SwitchButtons from "./SwitchButtons";
import RememberMeInput from "./RememberMeInput";
import LoginButton from "./LoginButton";



interface LoginBoxProps {
  onSubmit?: (data: LoginFormData) => void;
  isLoading?: boolean;
}

const LoginForm = ({ onSubmit }: LoginBoxProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      saveSession: false,
    },
  });

  const navigate = useNavigate();

  const onValidSubmit = async (data: LoginFormData) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        localStorage.setItem("token", "mock-jwt-token-12345");
        console.log("Login:", data);
        reset();
        navigate("/profile");
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleForgotPassword = () => {
    alert("Восстановление пароля в мок-режиме недоступно — используйте тестовый пароль.");
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} className="flex flex-col sm:gap-6 gap-3">
      <LoginFormInput
        id="email"
        label="Логин или email"
        type="text"
        placeholder="dev_architect"
        icon={<UserIcon className="w-4 h-4" />}
        registration={register("email")}
        error={errors.email?.message}
      />

      <LoginFormInput
        id="password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        icon={<KeyIcon className="w-4 h-4" />}
        registration={register("password")}
        error={errors.password?.message}
      />

      <div className="flex justify-between items-center">
        <RememberMeInput register={register("saveSession")} />
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-[#0DCCF2] hover:text-[#0ab8d9] transition-colors hover:underline"
        >
          Забыли пароль?
        </button>
      </div>

      <LoginButton isSubmitting={isSubmitting} />

      <div className="flex w-full justify-between items-center gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <p className="text-gray-400 text-sm">или через</p>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      <SwitchButtons />
    </form>
  );
};

export default LoginForm;
