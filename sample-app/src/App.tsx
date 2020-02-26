import React from 'react';
import { Provider } from 'react-redux';

import CountContainer from './containers/CountContainer';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <CountContainer />
    </Provider>
  );
}

export default App;
