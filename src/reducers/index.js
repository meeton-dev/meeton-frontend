const appReducers = (state, action) => {
    const { type, obj } = action;

    switch (type) {
    case 'SET_MODAL_VISIBLE': {
        return { ...state, advancedSearch: obj };
    }
    default: {
        return {};
    }
    }
};

export default appReducers;
