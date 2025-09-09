
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
      {label && <label htmlFor={id} className="mb-1 text-sm font-medium">{label}</label>}

      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded-lg px-3 py-2 focus:outline-none 
            ${Icon ? "pl-10" : "pl-3"}`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;
