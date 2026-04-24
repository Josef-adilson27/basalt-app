import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "./FormInput";
import { sendFormSchema, type SendFormData } from "./schema";
import { CodeArrowsIcon, OpenEyeIcon, TgLinkArrowIcon } from "../../Icons";


type Task = {

  github: string;
  demo: string | null;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
};


const TaskForm = () => {
  const {  register, handleSubmit, formState: { errors, isSubmitting }, reset, } = useForm<SendFormData>({
    resolver: zodResolver(sendFormSchema),
    defaultValues: { github: "", demo: "" },
  });


  const onSubmit = async (data: SendFormData) => {

    try {

      if (!data.github || data.github.trim() === "") {
        throw new Error("Ссылка на GitHub обязательна для заполнения");
      }

      // Создаём новое решение
      const newSolution: Task = {
        github: data.github,
        demo: data.demo || null,
        createdAt: new Date().toISOString(),
        status: "pending",
      };

      // Имитация задержки сети
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // сохранение...
      console.log("Решение сохранено:", newSolution);

      alert(
        JSON.stringify(
          {
            githubUrl: data.github,
            demo: data.demo,
            solutionId: newSolution
          },
          null,
          2,
        ),
      );

      // Сброс формы
      reset();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Произошла ошибка";
      console.error("Ошибка:", errorMessage);
      // Показываем ошибку через alert (как в логине)
      alert(JSON.stringify({ error: errorMessage }));
    }
  };
  return (
    <form  onSubmit={handleSubmit(onSubmit)}  className="h-full flex flex-col justify-around gap-10 " >
      <FormInput
        id="github"
        label="Ссылка на репозиторий"
        placeholder="https://github.com/..."
        icon={<CodeArrowsIcon className="w-4 h-4  text-[#0DCCF2]" />}
        required
        error={errors.github?.message}
        register={register("github")}
      />

      <FormInput
        id="demo"
        label="Ссылка на демо (не обязательно)"
        placeholder="https://demo.basalt..."
        icon={<OpenEyeIcon className="w-4 h-4 text-[#0DCCF2]" />}
        error={errors.demo?.message}
        register={register("demo")}
      />

      <button
        type="submit"
        className="bg-[#0DCCF2] w-full h-[45px] rounded-lg flex items-center justify-center gap-3 text-black 
        hover:bg-[#0ab8d9] transition-all duration-200
        active:scale-95 active:opacity-80 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>Отправка...</>
        ) : (
          <>
            Отправить решение
            <TgLinkArrowIcon className="w-6 h-6" />
          </>
        )}
      </button>
    </form>
  );
};

export default TaskForm;
