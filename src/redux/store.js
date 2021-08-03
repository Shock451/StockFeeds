import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

// import userReducer from './reducers/usersReducer';
import stocksReducer from './stocks/reducer';

const rootReducer = combineReducers({
    // users: userReducer,
    stocks: stocksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
