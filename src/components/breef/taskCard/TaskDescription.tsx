const TaskDescription = () => {
  return (
    <div className="max-h-[300px] sm:max-h-[350px] overflow-y-auto custom-scroll">
      {/* Цитата */}
      <div className="border-l-3 border-l-cyan-600 bg-cyan-600/10 p-4 sm:p-5 my-2 text-white rounded-r-lg">
        <p className="text-sm sm:text-base">
          «Перед вами — макет той самой платформы, на которой вы сейчас
          находитесь. Ваша задача — сверстать его. Да, это рекурсия.»
        </p>
      </div>

      {/* Описание */}
      <p className="text-sm sm:text-sm md:text-base leading-relaxed text-[#90C1CB]">
        Реализуйте все три страницы по макету: <span className=" text-[#0DCCF2]"> index.html </span> (активный спринт),
         <span className=" text-[#0DCCF2]">  hall.html </span>  (зал славы) и <span className=" text-[#0DCCF2]">profile.html  </span> (профиль). Стек — любой: чистый
        HTML/CSS, React, Vue, Svelte, Tailwind, Bootstrap, генерация через ИИ —
        что угодно.
      </p>
    </div>
  );
};
export default TaskDescription;
