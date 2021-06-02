import {
    SET_USERDATA,
    UPDATE_USERDATA,
    REMOVE_USERDATA,
    SET_CURRENT_PROJECT,
    UPDATE_CURRENT_PROJECT,
    REMOVE_CURRENT_PROJECT
} from './actionTypes';


/* USER DATA */
export const setUserData = content => ({
    type: SET_USERDATA,
    payload: content
});

export const updateUserData = content => ({
    type: UPDATE_USERDATA,
    payload: content
});

export const removeUserData = content => ({
    type: REMOVE_USERDATA,
    payload: content
});

/* CURRENT PROJECT */
export const setCurrentProject = content => ({
    type: SET_CURRENT_PROJECT,
    payload: content
});

export const updateCurrentProject = content => ({
    type: UPDATE_CURRENT_PROJECT,
    payload: content
});

export const removeCurrentProject = content => ({
    type: REMOVE_CURRENT_PROJECT,
    payload: content
});