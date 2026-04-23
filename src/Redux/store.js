import { applyMiddleware, compose, createStore } from "redux";
// import { productReducer } from "./reducer/productReducer"
import { rootRedcuer } from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import local from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage: local,
}

const persistedReducer = persistReducer(persistConfig, rootRedcuer)

const store = createStore(
    persistedReducer,
    rootRedcuer,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
let persistore = persistStore(store)

export { store, persistore };