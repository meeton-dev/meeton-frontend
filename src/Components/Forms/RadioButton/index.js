import React from 'react';


export const RadioBtn = (props) => {
    const { id, value, label, isSelected, onChange } = props;

        return (
            <div className="RadioButton">
                <input id={id} onChange={() => onChange(value)} value={value} type="radio" checked={isSelected} />
                <label htmlFor={id}>{label}</label>
            </div>
        );
}