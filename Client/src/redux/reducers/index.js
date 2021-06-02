import { combineReducers } from 'redux';

/* Reducers */
import userData from './userData';
import currentProject from './currentProject';

const reducers = combineReducers({
    userData: userData,
    currentProject: currentProject
});

export default reducers;