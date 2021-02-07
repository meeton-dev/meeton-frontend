import React, { useRef, useEffect, useState } from "react";
import {useTranslation} from "react-i18next";

const DashboardTop = () => {
  const {t, i18n} = useTranslation('common');
  const LS = window.localStorage;

  const switchLang = (lng) =>{
    i18n.changeLanguage(lng);
    LS.setItem('localization', lng);
  }
  return (
    <div className="dashboardTop">
      <div className="welcomeUser">
        <span>Welcome, </span>
        <span>Nikoletta!</span>
        <span>{t('test')}</span>
        <button onClick={() => switchLang('de')}>de</button>
        <button onClick={() => switchLang('en')}>en</button>
        <button onClick={() => switchLang('hu')}>hu</button>
      </div>
      <div className="dashboardAction">
        Create+
      </div>
    </div>
  );
};

export default DashboardTop;
