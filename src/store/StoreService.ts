import { Persistor } from 'redux-persist';

import { StoreTypes } from 'types';

class StoreService {
  private _store?: StoreTypes.StoreType;
  private _persistor?: Persistor;

  setStoreReference(storeRef: StoreTypes.StoreType) {
    this._store = storeRef;
  }

  setPersistorReference(persistorRef: Persistor) {
    this._persistor = persistorRef;
  }

  getState = () => {
    return this._store!.getState();
  };

  dispatch = (action: StoreTypes.AppDispatch) => {
    this._store!.dispatch(action);
  };
  purge = () => {
    this._persistor!.purge();
  };
}

export default new StoreService();
