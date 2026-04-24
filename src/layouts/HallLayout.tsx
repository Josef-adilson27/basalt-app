import { useState } from "react";
import BreefOpenContainer from "../components/breef/BreefOpenContainer";
import AdminSpeach from "../components/hall/AdminSpeach";
import TaskGeneralMetric from "../components/hall/TaskGeneralMetric";
import TasksSuccesMetric from "../components/hall/TasksSuccesMetric";
import PreviouseWinnersList from "../components/hall/PreviouseWinnersList";
import TabSwitcher from "../components/hall/TabSwitcher";

import { UsersList } from "../components/hall/UsersList";
import BreefModal from "../components/breef/breefModal/BreefModal";
import { sprintTabs } from "../mockDada/randomDataGenerator";

const HallLayout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // моковые данные
  const [tabs] = useState(sprintTabs);
  const [activeId, setActiveId] = useState(1);
  const activeTab = tabs.find((tab) => tab.id === activeId);
  const sprint = tabs.find((item) => item.id === activeTab?.id);
  let sortedUsers;
  console.log(sprint);
  //сортировка по карточек по rate (первое место по спринту/зал славы)  для примера.
  // Реальные данные могут отсортированы прямо из бд...
  if (sprint?.users) {
    sortedUsers = [...sprint.users].sort((a, b) => a.rate - b.rate);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-10 ">
        <h1 className="text-5xl font-bold text-white">Зал славы</h1>
        <p className="lg:w-[80%] w-full text-2xl text-gray-500">
          Чествуем архитекторов арены. Просматривайте решения прошлых спринтов,
          изучайте исходный код победителей и отдавайте дань уважения лучшим
          участникам.
        </p>
      </div>

      {/* кнопки*/}
      <TabSwitcher tabs={tabs} activeId={activeId} onTabChange={setActiveId} />

      <BreefOpenContainer
        onClick={() => setIsModalOpen(true)}
        name={sprint?.name as string}
        tecnologies={sprint?.tecnologies as []}
      />

      <div className="flex w-full max-[1440px]:flex-col gap-10 pt-10">
        <div className="flex flex-col gap-3 flex-1">
          <h3 className="text-white">Лучшие решения</h3>
          {sortedUsers && <UsersList users={sortedUsers} />}
        </div>

        <div className="flex w-[400px] max-[1440px]:w-full flex-col gap-3">
          <h3 className="text-gray-500">Метрики спринта</h3>
          <TaskGeneralMetric
            progres={sprint?.sprintProgress as number}
            sendedTaskCount={sprint?.sendedTaskCount as number}
            percentForPrevTasks={sprint?.percentForPrevTasks as number}
          />
          <TasksSuccesMetric
            succesTasksCount={sprint?.succesTasksCount as number}
            percentOfSuccesTasks={sprint?.percentOfSuccesTasks as number}
          />
          <div className="flex flex-col gap-3 py-3 text-gray-500 font-medium">
            <h3>Победители прошлых спринтов</h3>
            <PreviouseWinnersList />
          </div>
          <AdminSpeach />
        </div>
      </div>
      <BreefModal  tecnologies={sprint?.tecnologies as []} description={sprint?.sprintDescription as []} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
export default HallLayout;
