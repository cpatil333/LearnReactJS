import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducer/index";
import { thunk } from "redux-thunk";
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        reduxDevTools
    )
)

export default store;