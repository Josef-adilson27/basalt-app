import { useState } from "react";
import UserMarkCard from "./UserMarkCard";
import { DoubleArrowIcon } from "../Icons";

type UserType = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  tgLink: string;
  mentorRating: number;
  likes: number;
  rate: number;
};

export const UsersList = ({ users }: { users: UserType[] }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Показываем 5 карточек
  const [isLoading, setIsLoading] = useState(false);

  const visibleUsers = users.slice(0, visibleCount);
  const hasMore = visibleCount < users.length;

  const loadMore = () => {
    setIsLoading(true);
    // Имитация загрузки
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 5, users.length));
      setIsLoading(false);
    }, 500);
  };

  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-gray-400">Нет пользователей</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {visibleUsers.map((user) => (
        <UserMarkCard key={user.id} user={user} />
      ))}

      {/* Кнопка "Загрузить еще" */}
      {hasMore && (
        <button
          onClick={loadMore}
          disabled={isLoading}
          className="
            mt-4 px-6 py-3 
       

            text-gray-400 
         
            flex items-center justify-center gap-2
     
          "
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
              <span>Загрузка...</span>
            </>
          ) : (
            <>
              <span>{`Показать еще ${users.length - visibleCount} решений`} </span>
              <DoubleArrowIcon className="w-4 h-4" />
            </>
          )}
        </button>
      )}

      {/* Индикатор конца списка */}
      {!hasMore && visibleCount > 0 && (
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">
            Показаны все пользователи ({users.length})
          </p>
        </div>
      )}
    </div>
  );
};
