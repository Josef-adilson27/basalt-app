import AuthContainer from "../../components/forms/auth/AuthContainer";
import { ElectroIcon, MoneyIcon2, PublicIcon } from "../../components/Icons";


  const stats = [
    { value: "123", label: "бойцов", color: "text-white" },
    { value: "07", label: "спринтов", color: "text-sky-400" },
    { value: "280k", label: "Призовых ₽", color: "text-green-400" },
  ];


  const benefits = [
    {
      icon: <ElectroIcon className="text-[#0DCCF2]" />,
      title: "Реальные задачи",
      description: "Никаких leetcode-головоломок. Только то, что встретишь в проде.",
    },
    {
      icon: <PublicIcon />,
      title: "Открытое сообщество",
      description: "Решения публикуются — учись у тех, кто впереди тебя.",
    },
    {
      icon: <MoneyIcon2 className="text-[#0DCCF2]" />,
      title: "Решение в проде",
      description: "Один победитель спринта — его код уезжает в прод, а он получает деньги.",
    },
  ];

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center gap-[50px] sm:w-[80%] w-full h-screen max-w-[1200px] mx-auto ">
      {/* Левая секция - информация */}
      <div className="flex-1 flex flex-col gap-6 max-lg:hidden ">
        {/* Бейдж спринта */}
        <div className="w-max flex items-center gap-2 px-3 py-1 rounded-[8px] bg-cyan-600/20 border border-cyan-300">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-300 rounded-full" />
          <div className="text-[#0DCCF2]">sprint 3 в эфире</div>
        </div>

        {/* Заголовки */}
        <h1 className="text-4xl font-bold text-white">
          Войди в <span className="text-[#0DCCF2]">арену</span>.
        </h1>
        <h1 className="text-4xl font-bold text-white">Покажи код.</h1>

        {/* Описание */}
        <p className="text-gray-400">
          Basalt Arena — площадка для разработчиков, где каждый спринт превращается
          в честное соревнование за баллы, ранг и реальные деньги
        </p>

        {/* Статистика */}
        <div className="flex gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-2 w-[150px] h-[80px] rounded-[8px] bg-gradient-to-br bg-[#162a2e] border border-[#224249] px-3"
            >
              <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3 items-center">
              {benefit.icon}
              <div>
                <h2 className="text-[18px] font-bold text-white">{benefit.title}</h2>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Правая секция - форма авторизации */}
      <div className="flex-1 flex justify-center items-start ">
        <AuthContainer />
      </div>
    </div>
  );
};

export default AuthPage;
