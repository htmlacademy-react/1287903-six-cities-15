import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Spinner from '../spinner/spinner';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  citiesList: string[];
}

function App({ offers, reviews, citiesList }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.offersIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesList={citiesList} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} reviews={reviews} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
