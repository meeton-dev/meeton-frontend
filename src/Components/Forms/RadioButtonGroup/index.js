/* eslint-disable react/prop-types */
import React from 'react';
import RadioBtn from '../RadioButton';
// import { RadioBtn } from '../RadioButton';

const RadioBtnGroup = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, onChange } = props;

  console.log(data);
  return (
    <div className="RadioBtnGroup">
      {data.map((item) => (
        <RadioBtn
          key={item.id}
          id={item.id}
          isSelected={item.isSelected}
          value={item.value}
          label={item.label}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioBtnGroup;
