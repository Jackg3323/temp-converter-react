import PropTypes from "prop-types";

export default function Input({ label }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        placeholder={label}
        id={label.toLowerCase()}
        className="rounded border pl-2"
        name={label}
      />
    </div>
  );
}

Input.propTypes = { label: PropTypes.string.isRequired };
