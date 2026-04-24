import type { UseFormRegisterReturn } from "react-hook-form";

const ProfileInputField = ({
  label,
  placeholder,
  register,
  error,
  icon,
}: {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: string;
  icon?: React.ReactElement;
}) => {
  return (
    <div className="relative w-[350px] flex flex-col gap-1">
      <label htmlFor={label} className="text-gray-400">
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        {...register}
        className={`w-full pl-10 text-white pr-3 py-2 border-2 rounded-md bg-transparent  focus:outline-none focus:border-[#0DCCF2] transition-colors
          ${error ? "border-red-500" : "border-[#14383e]"}`}
      />
      <div className="absolute left-3 bottom-[14px]">{icon}</div>
    </div>
  );
};

export default ProfileInputField;
