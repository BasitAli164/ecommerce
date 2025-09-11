import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // or you can use react-icons

const InputField = ({
  label,
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  icon: Icon, // optional left icon
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Left Icon (optional) */}
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 rotate-45 text-gray-400 w-5 h-5" />
        )}

        {/* Input field */}
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border-b  px-3 py-2 focus:outline-none 
            ${Icon ? "pl-10" : "pl-3"} ${isPassword ? "pr-10" : ""}`}
          {...rest}
        />

        {/* Eye Icon for password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
