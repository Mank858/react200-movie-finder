import { combineReducers } from 'redux';

import searchReducer from './Components/Search/searchReducer'

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;