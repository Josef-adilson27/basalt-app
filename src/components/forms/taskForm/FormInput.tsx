import type { UseFormRegisterReturn } from "react-hook-form";


interface FormInputProps {
  id: string;
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
  error?: string;
  register?: UseFormRegisterReturn;
}

export const FormInput = ({ 
  id, 
  label, 
  placeholder, 
  icon, 
  required, 
  error, 
  register 
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <label htmlFor={id} className="text-[#90C1CB] text-sm sm:text-base font-bold">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      
      <div className="relative">
        <input
          id={id}
          placeholder={placeholder}
          className={`
            w-full 
            pl-9 sm:pl-10 
            pr-3 
            py-1.5 sm:py-2 
            text-sm sm:text-base
            border-2 
            rounded-md 
            bg-transparent 
            focus:outline-none 
            text-white 
            focus:border-[#0DCCF2] 
            transition-colors
            ${error ? 'border-red-500' : 'border-[#224249]'}
          `}
          {...register}
        />
        {icon && (
          <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
      
      {error && <p className="text-red-400 text-xs sm:text-sm">{error}</p>}
    </div>
  );
};