import {
    LOGGED,
    LOGGED_OUT,
} from 'src/actions/jardinConnectes';

export const initialState = {
    isLogged: false,
}

const jardinConnectes = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGGED:
            return {
                ...state,
                isLogged: true,
            }
        case LOGGED_OUT:
            return {
                ...state,
                isLogged: false,
            }
        default:
            return state;
    }
};

export default jardinConnectes;