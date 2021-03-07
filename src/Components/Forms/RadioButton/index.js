import React from 'react';

const RadioBtn = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    id, value, label, isSelected, onChange,
  } = props;

  return (
    <div className="RadioButton">
      <input id={id} onChange={() => onChange(value)} value={value} type="radio" checked={isSelected} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioBtn;
