import ActionButton from "../buttons/ActionButton";
import { FileIcon } from "../Icons";
import TechnologiesCard from "./TechnologiesCard";

const ExpiredDate = ({ data }: { data: number }) => {
  return (
    <div className="flex items-center  text-gray-300 gap-2 bg-[#101F22] w-max py-1 px-3 rounded-[8px] border-[1px] border-[#3f455c]">
      <svg
        width="9"
        height="10"
        viewBox="0 0 9 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.971413 9.71411C0.704275 9.71411 0.475588 9.61899 0.285353 9.42876C0.0951176 9.23852 0 9.00984 0 8.7427V1.9428C0 1.67567 0.0951176 1.44698 0.285353 1.25674C0.475588 1.06651 0.704275 0.971392 0.971413 0.971392H1.45712V-2.19345e-05H2.42853V0.971392H6.31419V-2.19345e-05H7.2856V0.971392H7.77131C8.03845 0.971392 8.26713 1.06651 8.45737 1.25674C8.6476 1.44698 8.74272 1.67567 8.74272 1.9428V8.7427C8.74272 9.00984 8.6476 9.23852 8.45737 9.42876C8.26713 9.61899 8.03845 9.71411 7.77131 9.71411H0.971413ZM0.971413 8.7427H7.77131V3.88563H0.971413V8.7427ZM0.971413 2.91422H7.77131V1.9428H0.971413V2.91422Z"
          fill="#94A3B8"
        />
      </svg>
      {`Завершен ${data} мая`}
    </div>
  );
};

const BreefOpenContainer = ({
  tecnologies,
  name,
  onClick,
}: {
  tecnologies: [];
  name: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-[#1a2e33]
     md:text-[1rem]
      text-[0.8rem]
       w-full gap-6 md:flex-row 
       flex-col  flex justify-between
         md:items-center  
         px-5 p 
         md:py-8  
         py-5 rounded-2xl 
         border 
         border-[#224249]"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-white">{`#${name}`}</h1>
        <div className="flex md:gap-10 gap-2 flex-wrap">
          {tecnologies.map((item) => {
            return <TechnologiesCard key={item} name={item} />;
          })}
          {/* <TechnologiesCard name="HTML" />
          <TechnologiesCard name="Tailwind css" /> */}
          <ExpiredDate data={15} />
        </div>
      </div>
      <div className="">
        <ActionButton
          onClick={onClick}
          colorType="primaryButton"
          buttonType={"button"}
          text={"Открыть бриф"}
          icon={<FileIcon className="w-4 h-4 text-gray-800" />}
        />
      </div>
    </div>
  );
};

export default BreefOpenContainer;
