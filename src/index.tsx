import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Navigator } from 'modules';
import store, { persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
