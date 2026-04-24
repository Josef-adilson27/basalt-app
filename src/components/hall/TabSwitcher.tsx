import { useEffect, useState } from "react";
import { ArrowDown } from "../Icons";

interface Tab {
  id: number;
  name: string;
}

interface TabItemProps {
  tab: Tab;
  isActive: boolean;
  onTabChange: (id: number) => void;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeId: number;
  onTabChange: (id: number) => void;
}

const TabItem = ({ tab, isActive, onTabChange }: TabItemProps) => {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      {/* Радио-кнопка */}
      <div
        onClick={() => onTabChange(tab.id)}
        className={`
          flex items-center justify-center w-4 h-4 rounded-full border-2 
          cursor-pointer transition-all duration-200
          ${isActive ? "border-sky-400" : "border-gray-400 hover:border-sky-300"}
        `}
      >
        {isActive && <div className="w-2 h-2 rounded-full bg-sky-400" />}
      </div>

      {/* Кнопка */}
      <button
        onClick={() => onTabChange(tab.id)}
        className={`
          transition-colors duration-200 whitespace-nowrap cursor-pointer
          ${isActive 
            ? "text-sky-400 font-medium" 
            : "text-gray-400 hover:text-sky-300"
          }
        `}
      >
        #{tab.name}
      </button>
    </div>
  );
};
const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => setIsMobile(window.innerWidth < 768);
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return { isMobile };
};

const TabSwitcher = ({ tabs, activeId, onTabChange }: TabSwitcherProps) => {
  const { isMobile } = useBreakpoint();
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 3; // Количество видимых табов на десктопе

  // Для мобильной версии - скролл
  if (isMobile) {
    return (
      <div className="relative my-5">
        <div className="flex items-center gap-5 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-sky-400 pb-2">
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              tab={tab}
              isActive={activeId === tab.id}
              onTabChange={onTabChange}
            />
          ))}
        </div>
        
        {/* Градиенты по краям */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0f1c1f] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0f1c1f] to-transparent pointer-events-none" />
      </div>
    );
  }

  // Десктопная версия с кнопкой "Показать больше"
  const visibleTabs = showAll ? tabs : tabs.slice(0, VISIBLE_COUNT);
  const hasMore = tabs.length > VISIBLE_COUNT;
 return (
    <div className="my-5">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {visibleTabs.map((tab, idx) => (
          <div
            key={tab.id}
            className="animate-fadeIn"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <TabItem
              tab={tab}
              isActive={activeId === tab.id}
              onTabChange={onTabChange}
            />
          </div>
        ))}
        
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a2e33] border border-[#224249] text-gray-400 hover:text-sky-400 hover:border-sky-400 transition-all duration-200"
          >
            {showAll ? (
              <>
                <span>Свернуть</span>
                <ArrowDown className="w-3 h-3" />
              </>
            ) : (
              <>
                <span>Показать еще</span>
                <span className="text-sky-400">{tabs.length - VISIBLE_COUNT}</span>
                <ArrowDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default TabSwitcher;
