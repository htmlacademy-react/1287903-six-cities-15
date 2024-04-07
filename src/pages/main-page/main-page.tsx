import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/index';
import Map from '../../components/map/map.tsx';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import LocationsList from '../../components/location-list/location-list.tsx';
import Sort from '../../components/sort/sort.tsx';

type MainPageProps = {
  citiesList: string[];
}

function MainPage({ citiesList }: MainPageProps): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector((state) => state.cityActive);
  const offersActive = useAppSelector((state) => state.offers);
  const cityMapActive = useAppSelector((state) => state.city);
  const placesCount = offersActive.length;

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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={citiesList} />
        <div className="cities">
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
        </div>
      </main>
    </div>

  );
}

export default MainPage;
