import store, { rootReducer } from 'store';

export type AppDispatch = typeof store.dispatch;
export type DispatchActionType = Parameters<AppDispatch>[0];
export type RootState = ReturnType<typeof rootReducer>;
export type StoreType = typeof store;
