import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import AppWithAuth from './Authentication/AppWithAuth';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import en from './Localizations/en.json';
import de from './Localizations/de.json';
import hu from './Localizations/hu.json';

const LS = window.localStorage;

const checkLocalization = () => {
  let language = LS.getItem('localization');
  if (!language) {
    var navigatorLang = navigator.language || navigator.userLanguage;
    console.log('navigatorLang', navigatorLang);
    LS.setItem('localization', 'en');
    return 'en'
  }

  return language;
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: checkLocalization(),
  resources: {
    en: {
      mtnApp: en
    },
    de: {
      mtnApp: de
    },
    hu: {
      mtnApp: hu
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <AppWithAuth />
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
