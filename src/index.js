import React from 'react';
import ReactDOM from 'react-dom';
import AppProviders from './context'

// import store from './store';
import './global/fonts.css';
import './global/index.css';
import App from './App';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
