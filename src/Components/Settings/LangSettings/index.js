import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../context/context';
import { setNotification } from '../../Common/Notification';
import RadioBtnGroup from '../../Forms/RadioButtonGroup';

const langArray = [
  {
    id: 'en',
    value: 'en',
    label: 'english',
    isSelected: true,
  },
  {
    id: 'de',
    value: 'de',
    label: 'german',
    isSelected: false,
  },
  {
    id: 'hu',
    value: 'hu',
    label: 'hungarian',
    isSelected: false,
  },
];

const LangSettings = () => {
  const [languages, setLanguages] = useState(langArray);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('mtnApp');
  const LS = window.localStorage;

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    LS.setItem('localization', lng);
    const text = `${t('settings.language.changed')} ${t(`settings.language.to.${lng}`)}`;
    setNotification(dispatch, { text, timestamp: new Date().getTime() });
  };

  const handleLanguageChange = (value) => {
    setLanguages((prevState) => {
      // console.log(prevState);
      const newState = [...prevState];
      newState.map((object) => {
        if (object.value === value) {
          object.isSelected = true;
        } else {
          object.isSelected = false;
        }
      });

      switchLang(value);

      return newState;
    });
  };

  // modalVisible
  return (
    <div className="LangSettings">
      <RadioBtnGroup data={languages} onChange={handleLanguageChange} />
    </div>
  );
};

export default LangSettings;
