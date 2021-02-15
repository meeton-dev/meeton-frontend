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

const MainContext = (props) => {
    const [state, dispatch] = useReducer(appReducers, {
        user: props.setUser,
        modal: {
            type: null,
            mask: true,
        }
    });
    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { MainContext, useAppState, useAppDispatch };

MainContext.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
};
