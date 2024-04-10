import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { citiesList } from './const';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import {fetchQuestionAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        offers={offers}
        reviews={reviews}
        citiesList={citiesList}
      />
    </Provider>
  </React.StrictMode>
);
