import {compose, createStore} from "redux";
import {sliderReducer} from "./slider";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store=createStore(sliderReducer,composeEnhancers());