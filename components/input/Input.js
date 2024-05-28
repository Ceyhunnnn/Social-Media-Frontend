const Input = ({ name, placeholder, type, setValue }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
