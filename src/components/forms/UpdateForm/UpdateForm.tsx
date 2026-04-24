import ActionButton from "../../buttons/ActionButton";
import {
  ButtonFileIcon,
  EmailAtIcon,
  EmaiLetterlIcon,
  TgLinkArrowIcon,
} from "../../Icons";
import { useForm } from "react-hook-form";
import { profileSchema, type ProfileFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ProfileInputField from "./UpdateInputField";
import { useState } from "react";
import { saveProfileToMockAPI } from "./mocks";

const UpdateForm = () => {

  const [notification, setNotification] = useState<{type: "success" | "error", message: string} | null>(null);

  const {register, handleSubmit,  formState: { errors, isSubmitting },  reset } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", telegram: "", email: "", aboutMe: "" },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setNotification(null);
    try {
      
      console.log("Отправка данных:", data);
      if (!data.name && !data.email && !data.telegram) {
        throw new Error("Заполните хотя бы одно поле.");
      }

      // Сохраняем через мок-API
      const savedUser = await saveProfileToMockAPI(data);
      setNotification({ type: "success", message: "✅ Профиль успешно обновлён!" });
      console.log("Профиль сохранён:", savedUser);

      // Через 3 секунды убираем уведомление
      setTimeout(() => setNotification(null), 3000);

    } catch (error) {

      console.error("Ошибка сохранения:", error);
      const errorMessage =  error instanceof Error    ? error.message : "Ошибка при сохранении профиля";
      // Показываем красное уведомление об ошибке
      setNotification({ type: "error", message: `❌ ${errorMessage}` });
      // Через 3 секунды убираем уведомление
      setTimeout(() => setNotification(null), 3000);

    }
  };

  const handleReset = () => {
    reset({ name: "", telegram: "", email: "", aboutMe: "" });
    setNotification({ type: "success", message: "🔄 Форма очищена" });
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {notification && (
        <div
          className={`mb-4 p-3 rounded-md ${
            notification.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/50"
              : "bg-red-500/20 text-red-400 border border-red-500/50"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="flex flex-wrap gap-5">
        <ProfileInputField
          label="name"
          placeholder="dev_architect"
          register={register("name")}
          error={errors.name?.message}
          icon={<EmailAtIcon className="w-4 h-4 text-gray-600" />}
        />

        <ProfileInputField
          label="Telegram"
          placeholder="dev_arch"
          register={register("telegram")}
          error={errors.telegram?.message}
          icon={<TgLinkArrowIcon className="w-4 h-4 text-gray-600" />}
        />

        <ProfileInputField
          label="Электронная почта"
          placeholder="ahmad@basalt-arena.io"
          register={register("email")}
          error={errors.email?.message}
          icon={<EmaiLetterlIcon className="w-4 h-4 text-gray-600" />}
        />
      </div>

      <div className="py-5 flex flex-col gap-1">
        <label htmlFor="aboutMe" className="text-[#90C1CB]">
          О себе
        </label>
        <textarea
          placeholder="Расскажите о себе"
          id="aboutMe"
          {...register("aboutMe")}
          className={`w-full p-2 border-2 rounded-md bg-transparent focus:outline-none text-white focus:border-[#0DCCF2] transition-colors min-h-[100px]
            ${errors.aboutMe ? "border-red-500" : "border-[#14383e]"}`}
        />
        {errors.aboutMe && (
          <p className="text-red-500 text-sm">{errors.aboutMe.message}</p>
        )}
      </div>

      <div className="h-[1px] w-full mt-2 border border-[#224249] rounded-[12px]" />

      <div className="flex gap-3 py-3">
        <ActionButton
          buttonType="reset"
          colorType="reset"
          text="Отмена"
          onClick={handleReset}
        />
        <ActionButton
          buttonType="submit"
          colorType="primaryButton"
          text={isSubmitting ? "Сохранение..." : "Сохранить"}
          icon={<ButtonFileIcon />}
        />
      </div>
    </form>
  );
};
export default UpdateForm;
