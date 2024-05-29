const Input = ({ name, placeholder, type, setValue, icon }) => {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input ${icon && "!px-10"}`}
      />
      {icon && <div className="absolute top-[8px] px-3">{icon}</div>}
    </div>
  );
};

export default Input;
