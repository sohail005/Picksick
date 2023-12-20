// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from './slices/backgroundSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'Picksick',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, backgroundReducer);

const store = configureStore({
    reducer: {
        background: persistedReducer,
    },
});

const persistor = persistStore(store);
export { store, persistor };
