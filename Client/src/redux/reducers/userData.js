import {
    SET_USERDATA,
    UPDATE_USERDATA,
    REMOVE_USERDATA
} from '../actionTypes';

const initialState = {
    id: 1
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USERDATA:
            state = action.payload;
            return state;
        case UPDATE_USERDATA:
            state = action.payload;
            return state;
        case REMOVE_USERDATA:
            state = null;
            return state;
        default:
            return state;
    }
};