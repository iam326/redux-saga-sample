import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import CountContainer from './containers/CountContainer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <CountContainer />
    </Provider>
  );
}

export default App;
