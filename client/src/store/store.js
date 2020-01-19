import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listingReducer from '../reducers/listingReducer';

const store = createStore(
    combineReducers({
        listings: listingReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;