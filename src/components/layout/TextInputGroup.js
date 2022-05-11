import React from 'react';

function TextInputGroup({ label, name, placeholder, type, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

TextInputGroup.defaultProps = {
  type: 'text',
};
export default TextInputGroup;
