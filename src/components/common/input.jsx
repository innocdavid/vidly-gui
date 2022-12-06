import React from 'react';

const Input = ({ name, label, value, onChange, textType }) => {
  return (
    <div className="form-group m-2">
      <label htmlFor={name}>{label}</label>
      <input 
        value={value}
        onChange={onChange}
        autoFocus
        id={name} 
        type={textType}
        name={name}
        className="form-control"
      />
    </div>
  );
}

export default Input;