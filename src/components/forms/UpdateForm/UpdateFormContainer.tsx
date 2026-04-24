import { UserSettingsIcon } from "../../Icons";

import UpdateForm from "./UpdateForm";

const UpdateFormContainer = () => {
  return (
    <div className="w-full   border flex flex-col sm:gap-8 sm:p-8 gap-3 p-3  border border-[#224249] rounded-[12px]">
      <div>
        <div className="flex items-center gap-3">
          <UserSettingsIcon />
          <p className="my-5 text-white">Настройки профиля</p>
        </div>
        <div className="h-[1px] w-full  mt-2 border border-[#224249] rounded-[12px]" />
      </div>
      <UpdateForm />
    </div>
  );
};

export default UpdateFormContainer;