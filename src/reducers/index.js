import { combineReducers } from 'redux';
import courses  from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    authors
});

console.log(rootReducer);

export default rootReducer  