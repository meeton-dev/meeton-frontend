const appReducers = (state, action) => {
    const { reducer, obj } = action;

    switch (reducer) {
    case 'SET_NOTIFICATION': {
        return { ...state, notifications: obj };
    }
    case 'SET_MODAL_VISIBILITY': {
        return { ...state, modal: obj };

    }
    default: {
        return {};
    }
    }
};

export default appReducers;
