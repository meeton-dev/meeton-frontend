import React, { useEffect, useState } from 'react';

const LS = window.localStorage;

const ThemeSwap = () => {
  const [activeTheme, setActiveTheme] = useState();

  useEffect(() => {
    const theme = LS.getItem('theme');
    const el = document.documentElement;

    if (el.classList.value.length < 1) {
      if (!theme) {
        el.classList.add('mtn-dark');
      } else {
        el.classList.add(`mtn-${theme}`);
      }
      setActiveTheme(theme);
    }
  }, []);

  const changeTheme = (theme) => {
    LS.setItem('theme', theme);
    const el = document.documentElement;
    el.className = '';
    el.classList.add(`mtn-${theme}`);
    setActiveTheme(theme);
  };

  const isActive = (theme) => activeTheme === theme;

  return (
    <div className="themeSwap">
      <div
        role="button"
        tabIndex="-1"
        className={`item ${isActive('light') ? 'active' : ''}`}
        onClick={() => changeTheme('light')}
        onKeyDown={() => {}}
      >
        <span className="icon-sun" />
      </div>
      <div
        role="button"
        tabIndex="-1"
        className={`item ${isActive('dark') ? 'active' : ''}`}
        onClick={() => changeTheme('dark')}
        onKeyDown={() => {}}
      >
        <span className="icon-moon" />
      </div>
    </div>
  );
};

export default ThemeSwap;
