const Input = ({ name, placeholder, type, setValue, icon, suffixIcon }) => {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input ${icon && "!pl-10"} ${suffixIcon && "!pr-10"}`}
      />
      {icon && <div className="absolute top-[8px] px-3">{icon}</div>}
      {suffixIcon && (
        <div className="absolute top-[8px] right-0 px-3">{suffixIcon}</div>
      )}
    </div>
  );
};

export default Input;
