const Input = ({
  name,
  placeholder,
  type = "text",
  value,
  setValue,
  icon,
  suffixIcon,
  onChange,
  onBlur,
}) => {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`input ${icon && "!pl-10"} ${suffixIcon && "!pr-10"}`}
        onChange={onChange}
        autoComplete="on"
        onBlur={onBlur}
      />
      {icon && <div className="absolute top-[8px] px-3">{icon}</div>}
      {suffixIcon && (
        <div className="absolute top-[8px] right-0 px-3">{suffixIcon}</div>
      )}
    </div>
  );
};

export default Input;
