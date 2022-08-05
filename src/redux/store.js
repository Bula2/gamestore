import {combineReducers, legacy_createStore as createStore} from "redux";
import shopReducer from "./shop-reducer";

let reducers =  combineReducers({
    shopPage: shopReducer
});

const store = createStore(reducers);


export default store;