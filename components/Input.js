export default function Input({ onChange, value, label, placeholder }) {
  let input = (
    <input
      className={
        `focus:outline-none outline-none w-full p-2 rounded-md bg-gray-100` +
        ` border-2 border-transparent hover:bg-gray-200 focus:bg-gray-200 transition-colors` +
        ` focus:border-blue-400 dark:bg-gray-800 dark:focus:border-blue-700 mb-3`
      }
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );

  if (label) {
    return (
      <div>
        <label>{label}</label>
        {input}
      </div>
    );
  } else {
    return input;
  }
}
