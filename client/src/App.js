import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './components/Redux/store';

import Routes from './components/Navigation/Routes';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
