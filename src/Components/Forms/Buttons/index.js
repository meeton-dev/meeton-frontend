import React from 'react';

export const Btn = (props) => {
    const {primary, secondary, action, label, icon, onClick}= props;

    const generateClasses = () => {
        let cls = '';

        if (primary) cls += 'primary';
        else if (secondary) cls += 'secondary';
        else if (action) cls += 'action';
        else cls += 'generic';

        return cls;
    }

    return (
        <button onClick={onClick ? onClick : () => console.log('no function assigned')} className={`mtnBtn ${generateClasses()}`}>
            {icon && <span className={icon}></span>}
            <span>{label}</span>
        </button>
    )
}

