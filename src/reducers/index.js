import { combineReducers } from 'redux';
import commentsReducer from 'reducers/commentsReducer';
import authReducer from 'reducers/auth';

const rootReducers = combineReducers({
    comments: commentsReducer,
    auth: authReducer
});
export default rootReducers;