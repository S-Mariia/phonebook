import React from 'react';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';

import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter basename="/phonebook">
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// ... normal setup, create store and persistor, import components etc.

// const App = () => {
//   return (
//     <Provider store={store}>
// <PersistGate loading={null} persistor={persistor}>
//         <RootComponent />
// </PersistGate>
//     </Provider>
//   );
// };
