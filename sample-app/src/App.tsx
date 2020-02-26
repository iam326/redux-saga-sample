import React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/Counter';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
