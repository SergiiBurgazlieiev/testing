import { combineReducers } from 'redux';
import commentsReducer from 'reducers/commentsReducer';

const rootReducers = combineReducers({
    comments: commentsReducer
});
export default rootReducers;