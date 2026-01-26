export const Input = (props) => {
  const {
    type = "text",
    value,
    placeholder,
    onChange,
    name,
    label,
    error,
    require,
  } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <label className="">{label}</label>
      </div>
      <input
        className="border"
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
