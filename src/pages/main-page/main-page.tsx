import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import Map from '../../components/map/map.tsx';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import LocationsList from '../../components/location-list/location-list.tsx';
import Sort from '../../components/sort/sort';
import NavList from '../../components/nav-list/nav-list';
import Spinner from '../../components/spinner/spinner';
import { getCityActive, getCity, getOffers, getOffersIsLoading, getOffersIsNotFound } from '../../store/offers-process/offers-process.selectors';
import MainEmptyPage from '../main-empty-page/main-empty-page.tsx';

function MainPage(): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector(getCityActive);
  const offersActive = useAppSelector(getOffers);
  const cityMapActive = useAppSelector(getCity);
  const placesCount = offersActive.length;
  const offersIsLoading = useAppSelector(getOffersIsLoading);
  const offersIsNotFound = useAppSelector(getOffersIsNotFound);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <NavList />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <LocationsList cityActive={cityActive} />
        {offersIsLoading && <Spinner />}
        <h1 className="visually-hidden">Cities</h1>
        {offersIsNotFound && <Navigate to={AppRoute.NotFound} />}
        {!offersIsLoading && (
          <div className="cities">
            {placesCount ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesCount} places to stay in {cityActive}</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    <PlaceCardList offerList={offersActive} setCardHoverId={setCardHoverId} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map mapType={'cities'} offers={offersActive} cardHoverId={cardHoverId} city={cityMapActive} />
                </div>
              </div>
            ) : (
              <MainEmptyPage cityActive={cityActive} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default MainPage;
