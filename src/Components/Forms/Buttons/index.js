import React from 'react';

const Btn = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    primary, secondary, action, label, icon, onClick,
  } = props;

  const generateClasses = () => {
    let cls = '';

    if (primary) cls += 'primary';
    else if (secondary) cls += 'secondary';
    else if (action) cls += 'action';
    else cls += 'generic';

    return cls;
  };

  return (
    <button
      type="button"
      onClick={onClick || (() => console.log('no function assigned'))}
      className={`mtnBtn ${generateClasses()}`}
    >
      {icon && <span className={`mtnBtn-icn ${icon}`} />}
      <span className="mtnBtn-lbl">{label}</span>
    </button>
  );
};

export default Btn;
