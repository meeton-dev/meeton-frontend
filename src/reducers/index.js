const appReducers = (state, action) => {
    const { reducer, obj } = action;

    switch (reducer) {
    case 'SET_MODAL_VISIBILITY': {
        return { ...state, modal: obj };

    }
    default: {
        return {};
    }
    }
};

export default appReducers;
