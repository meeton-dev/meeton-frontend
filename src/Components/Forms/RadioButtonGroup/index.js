import React from 'react';
import { RadioBtn } from '../RadioButton';
// import { RadioBtn } from '../RadioButton';


export const RadioBtnGroup = (props) => {
    const {data, onChange}= props;

    console.log(data);
    return (
        <div className="RadioBtnGroup">
            {data.map(item => <RadioBtn 
                key={item.id} 
                id={item.id} 
                isSelected={item.isSelected} 
                value={item.value} 
                label={item.label}
                onChange={onChange}
                />)}          
        </div>
    );
}