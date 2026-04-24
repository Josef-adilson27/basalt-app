import avatar from "../../assets/avatar.png";
import { CodeArrowsIcon, PensilIcon } from "../Icons";


const AvatarBlock = () => {
    return (
           <div className="flex flex-col md:flex-row items-center  text-white w-full h-auto md:h-[200px] p-4 md:p-5 gap-4 v:gap-8 rounded-[12px] border border-[#224249] bg-[#14272b]">
              {/* Аватар */}
              <div className="">
                <img
                  src={avatar}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-2xl border border-[#258195] object-cover"
                  alt="avatar"
                />
              </div>
      
              {/* Информация */}
              <div className="flex flex-col gap-2 flex-1 w-full md:w-auto text-center md:text-left">
                <h1 className="text-xl md:text-2xl md:text-3xl">@dev_architect</h1>
      
                <p className="text-sm md:text-base text-gray-300">
                  Разработчик. Учусь, делаю проекты, участвую в спринтах Basalt Arena
                </p>
      
                {/* Поле ввода */}
                <div className="relative w-full md:w-[250px] md:w-[300px]">
                  <CodeArrowsIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Введите cвой стек"
                    className="w-full py-1.5 sm:py-1 px-7 pr-7 border border-[#224249] rounded-[5px] bg-transparent   focus:outline-none focus:border-[#0DCCF2] transition-colors text-sm sm:text-base"
                  />
                  <PensilIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-[#0DCCF2] transition-colors" />
                </div>
              </div>
            </div>
    );
}

export default AvatarBlock;
