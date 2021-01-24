import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import appReducers from '../reducers';

const AppContext = createContext();
const AppDispatchContext = createContext();

const useAppState = () => {
    const context = React.useContext(AppContext);
    return context;
};

const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);
    return context;
};

const MainContext = ({ children }) => {
    const [state, dispatch] = useReducer(appReducers, {});

    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { MainContext, useAppState, useAppDispatch };

MainContext.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
};
