const InputField = ({
  label,
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  icon: Icon, // pass icon component
  ...rest
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none 
            ${Icon ? "pr-10" : "pr-3"}`} // extra space on right if icon exists
          {...rest}
        />
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default InputField;
