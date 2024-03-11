import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './task.reducer';

const appReducer = combineReducers({
    data: dataReducer,
});

const rootReducer = (
    state,
    action
) => 
{
    return appReducer(state, action);
};

export default rootReducer;
