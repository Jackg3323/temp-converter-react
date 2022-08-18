import PropTypes from "prop-types";

export default function Input({ label, value, changeHandler }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        placeholder={label}
        id={label.toLowerCase()}
        className="rounded border pl-2"
        name={label}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
