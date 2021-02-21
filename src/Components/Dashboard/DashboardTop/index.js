import React, { useRef, useEffect, useState } from "react";
import {useTranslation} from "react-i18next";
import { useAppState } from "../../../context/context";
import { Btn } from "../../Forms/Buttons";

const DashboardTop = () => {
  const { user } = useAppState();

  const {t, i18n} = useTranslation('mtnApp');
  const LS = window.localStorage;

  const switchLang = (lng) =>{
    i18n.changeLanguage(lng);
    LS.setItem('localization', lng);
  }

  return (
    <div className="dashboardTop">
      <div className="welcomeUser">
        <span style={{marginRight: '1rem'}}>{t('dashboard.welcome')}</span>
        <span>{user.name}</span>
        <div style={{fontSize: '12px', margin: '0 1rem'}}>
          {!user.email_verified && 'Email not verified'}
        </div>
        <button onClick={() => switchLang('de')}>de</button>
        <button onClick={() => switchLang('en')}>en</button>
        <button onClick={() => switchLang('hu')}>hu</button>
      </div>
      <div className="dashboardAction">
        <Btn
          primary
          label="create"
          onClick={() => {console.log('Create new')}}
          icon='icon-plus'
            />
            <Btn
          secondary
          onClick={() => {console.log('Create new')}}
          icon='icon-plus'
            />
            <Btn
          action
          label="Action"
          onClick={() => {console.log('Create new')}}
          icon='icon-plus'
            />
            <Btn
          label="Default"
          onClick={() => {console.log('Create new')}}
          icon='icon-plus'
            />
      </div>
    </div>
  );
};

export default DashboardTop;
