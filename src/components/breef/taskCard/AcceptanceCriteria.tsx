const AcceptanceCriteria = () => {
  const criteria = [
    {
      text: "Главное — ",
      highlight: "соответствие макету",
      suffix: ". Чем точнее, тем выше оценка наставника.",
    },
    {
      text: "Весь независимый от бэка JS-функционал должен ",
      highlight: "работать",
      suffix: ": модалки, таймер, табы, формы и т.д.",
    },
    {
      text: "Все запросы к серверу — ",
      highlight: "через мок-API",
      suffix:
        " (заглушки). На основе победившего мок-API в следующем спринте будем проектировать настоящий бэкенд",
    },
  ];

  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <p className="text-[#0DCCF2] text-sm sm:text-base">Критерии приёмки:</p>
      <ul className="list-disc pl-4 sm:pl-5 text-[#90C1CB] space-y-2 text-sm sm:text-sm">
        {criteria.map((item, idx) => (
          <li key={idx}>
            {item.text}
            <span className="text-[#00FF9D] font-medium">{item.highlight}</span>
            {item.suffix}
          </li>
        ))}
      </ul>
      <div className="h-[1px] w-full mt-2 border border-[#224249] rounded-[12px]" />
    </div>
  );
};

export default AcceptanceCriteria;
