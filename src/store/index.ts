import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import StoreService from 'store/StoreService';

import { storage } from './storage';
import puzzleSlice from './puzzle';
import snakeSlice from './snake';
import tetrisSlice from './tetris';

export const rootReducer = combineReducers({
  puzzle: puzzleSlice.reducer,
  snake: snakeSlice.reducer,
  tetris: tetrisSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

export const persistor = persistStore(store);

StoreService.setPersistorReference(persistor);
StoreService.setStoreReference(store);

export default store;
