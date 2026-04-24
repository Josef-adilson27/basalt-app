import { sprintsDescription, TECHNOLOGIES, USERS_DATA } from "./consts";

/**
 * Функция для получения случайного описания из спринтов
 * @returns Массив с описанием или пустой массив, если данных нет
 */

function getRandomDescriptionForSprint(): {
  text: string;
  highlights: string[];
}[] {
  const sprints = [
    "sprint2",
    "sprint3",
    "sprint4",
    "sprint5",
    "sprint6",
    "sprint7",
    "sprint9",
    "sprint10",
  ];

  if (sprints.length === 0) {
    return [];
  }

  const randomIndex = Math.floor(Math.random() * sprints.length);
  const randomSprintKey = sprints[randomIndex];

  const randomDescriptionData =
    sprintsDescription[randomSprintKey as keyof typeof sprintsDescription];
  return randomDescriptionData;
}

// это основной вид моковых данных котрых содержит данные о юзерах и о спринтах.
const generateSprintData = (id: number, baseSuccess: number) => ({
  id,
  name: `Спринт ${id}: ${["Ecommerce shop", "Fullstak app", "Basalt Arena (frontend)", "React application", "Angular application"][Math.floor(Math.random() * 5)]}`,
  percerntOfSuccesTasks: baseSuccess + Math.floor(Math.random() * 15) - 7,
  sendedTaskCount: 150 + Math.floor(Math.random() * 200),
  succesTasksCount: 120 + Math.floor(Math.random() * 180),
  percentOfSuccesTasks: 70 + Math.floor(Math.random() * 25),
  sprintProgress: 65 + Math.floor(Math.random() * 30),
  percentForPrevTasks: Math.floor(Math.random() * 50) - 25,
  users: [USERS_DATA.sprint1, USERS_DATA.sprint2, USERS_DATA.sprint3][
    Math.floor(Math.random() * 3)
  ],
  tecnologies: TECHNOLOGIES[Math.floor(Math.random() * TECHNOLOGIES.length)],
  sprintDescription: getRandomDescriptionForSprint(),
});

///количесвто спринтов
const SPRINTS_AMOUNT = 9;

//основные данные
export const sprintTabs = Array.from({ length: SPRINTS_AMOUNT }, (_, i) =>
  generateSprintData(i + 1, 75 + i * 2),
);
