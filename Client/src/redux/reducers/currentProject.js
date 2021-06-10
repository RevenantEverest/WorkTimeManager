import {
    SET_CURRENT_PROJECT,
    UPDATE_CURRENT_PROJECT,
    REMOVE_CURRENT_PROJECT
} from '../actionTypes';

const initialState = null;

const handler = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PROJECT:
            state = action.payload;
            return state;
        case UPDATE_CURRENT_PROJECT:
            state = action.payload;
            return state;
        case REMOVE_CURRENT_PROJECT:
            state = null;
            return state;
        default:
            return state;
    }
};

export default handler;