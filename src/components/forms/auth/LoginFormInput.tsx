import { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { ClosedEyeIcon, OpenEyeIcon } from '../../Icons';


interface UniversalInputProps {
  id: string;
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  icon: React.ReactNode;
  registration?: UseFormRegisterReturn;
  error?: string;
}

const LoginFormInput = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  icon, 
  registration,
  error 
}: UniversalInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#90C1CB] text-sm">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          id={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full h-[40px] pl-10 pr-10 border-2 border-[#224249] rounded-[8px] bg-[#101F22] text-white placeholder-gray-500 focus:border-[#0DCCF2] focus:ring-1 focus:ring-[#0DCCF2] outline-none transition-all"
          {...registration}
        />
        {isPassword && (
          <button
            type="button"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <OpenEyeIcon className="w-4 h-4 text-gray-400 hover:text-[#0DCCF2] transition-colors" />
            ) : (
              <ClosedEyeIcon className="w-4 h-4 text-gray-400 hover:text-[#0DCCF2] transition-colors" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-400 text-xs animate-pulse">{error}</p>}
    </div>
  );
};

export default LoginFormInput;