import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import { fetchFavoritesAction } from './store/api-actions';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
