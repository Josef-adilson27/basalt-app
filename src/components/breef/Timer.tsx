"use client";
import React, { useState, useEffect } from "react";

interface TimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onComplete?: () => void;
}

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({
  initialHours = 5,
  initialMinutes = 0,
  initialSeconds = 0,
  onComplete,
}) => {
  const [time, setTime] = useState<TimeState>({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setIsActive(false);
          if (onComplete) onComplete();
          return prevTime;
        }

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }

        if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }

        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onComplete]);

  const formatNumber = (num: number): string => num.toString().padStart(2, "0");

  return (
    <div className="bg-[#0DCCF20D] rounded-xl w-full h-[150px] flex flex-col justify-center items-center gap-5 sm:text-base text-sm border border-[#224249]">
      <h1 className="text-center text-2xl text-[#90C1CB]">
        До завершения спринта
      </h1>
      <div className="flex sm:min-w-[30%] min-w-[200px] justify-between items-center leading-none">
        {/* Часы */}
        <div className="flex flex-col items-center sm:min-w-[140px] min-w-[80px] ">
          <h1 className="text-[3em] font-medium  text-[#0DCCF2] drop-shadow-[0_0_5px_rgba(13,204,242,0.5)]">
            {formatNumber(time.hours)}
          </h1>
          <p className="text-[#90C1CB]">часов</p>
        </div>

        {/* Разделитель */}
        <div className="flex flex-col justify-between h-[30px] mb-4">
          <div className="w-2.5 h-2.5 bg-[#3c666f] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#3c666f] rounded-full" />
        </div>

        {/* Минуты */}
        <div className="flex flex-col items-center sm:min-w-[140px] min-w-[80px] ">
          <h1 className="text-[3em] font-medium  text-[#0DCCF2] drop-shadow-[0_0_5px_rgba(13,204,242,0.5)]">
            {formatNumber(time.minutes)}
          </h1>
          <p className="text-[#90C1CB]">минут</p>
        </div>
        {/* Разделитель */}
        <div className="flex flex-col justify-between h-[30px] mb-4">
          <div className="w-2.5 h-2.5 bg-[#3c666f] rounded-full" />
          <div className="w-2.5 h-2.5 bg-[#3c666f] rounded-full" />
        </div>

        {/* Секунды */}
        <div className="flex flex-col items-center sm:min-w-[140px] min-w-[80px] text-[#00FF9D]">
          <h1 className="text-[3em] font-medium drop-shadow-[0_0_5px_rgba(0,255,157,0.5)]">
            {formatNumber(time.seconds)}
          </h1>
          <p className="text-[#00FF9D]">секунд</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;