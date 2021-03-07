import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppState, useAppDispatch } from '../../../context/context';
import Btn from '../../Forms/Buttons';
import { showModal } from '../../Common/Modals';

const DashboardTop = () => {
  const { user } = useAppState();
  const dispatch = useAppDispatch();

  const { t } = useTranslation('mtnApp');

  return (
    <div className="dashboardTop">
      <div className="welcomeUser">
        <span style={{ marginRight: '1rem' }}>{t('dashboard.welcome')}</span>
        <span>{user.name}</span>
        <div style={{ fontSize: '12px', margin: '0 1rem' }}>
          {!user.email_verified && 'Email not verified'}
        </div>
      </div>
      <div className="dashboardAction">
        <Btn
          primary
          label="create"
          onClick={() => showModal(dispatch, 'CREATE_MEETING', true)}
          icon="icon-plus"
        />
        {/* <Btn
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
        /> */}
      </div>
    </div>
  );
};

export default DashboardTop;
