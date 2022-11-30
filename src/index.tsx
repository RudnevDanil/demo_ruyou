import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import './index.css';
import App from './App';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
    )
))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
              <App />
          </Provider>
      </Suspense>
  </React.StrictMode>
);