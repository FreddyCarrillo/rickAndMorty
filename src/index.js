import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { UIProvider } from './app/context/ui';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <UIProvider>
        <App/>
      </UIProvider>
  </Provider>,
  document.getElementById('root')
);
