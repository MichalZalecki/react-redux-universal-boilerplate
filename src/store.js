import { createStore } from "redux";
import rootReducer from "./rootReducer";

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState);

export default store;
