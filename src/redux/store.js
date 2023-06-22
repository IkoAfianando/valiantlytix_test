import {configureStore} from "@reduxjs/toolkit";
import commerceReducer from "./commerceSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const percistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(percistConfig, commerceReducer);

export const store = configureStore({
    reducer: {
        commerce: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    })
})
export let persistor = persistStore(store);
