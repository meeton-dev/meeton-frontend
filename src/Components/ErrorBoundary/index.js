/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Btn from '../Forms/Buttons';

const ErrorMsgComp = ({ error, errorInfo }) => {
  const { t } = useTranslation('mtnApp');

  return (
    <div className="crashHappened">
      <div>
        <h2>{t('general.appCrash.lead')}</h2>
        <p>{t('general.appCrash.description')}</p>
        <Btn
          label="Reload page"
          onClick={() => window.location.reload()}
        />
      </div>
      <details>
        <summary>
          {t('general.appCrash.details')}
        </summary>
        <div>
          {error && error.toString()}
        </div>
        <div>
          {errorInfo.componentStack}
        </div>
      </details>
    </div>
  );
};

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return <ErrorMsgComp error={this.state.error} errorInfo={this.state.errorInfo} />;
    }
    // Normally, just render children
    return this.props.children;
  }
}
