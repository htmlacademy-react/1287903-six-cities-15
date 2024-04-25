import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import NavList from '../../components/nav-list/nav-list';
import { useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import { getFavorites, getFavoritesIsLoading, getFavoritesIsNotFound } from '../../store/favorites-process/favorites-process.selectors';
import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';

function FavotitesPage(): JSX.Element {
  const favoriteCards = useAppSelector(getFavorites);
  const favoritesIsLoading = useAppSelector(getFavoritesIsLoading);
  const favoritesIsNotFound = useAppSelector(getFavoritesIsNotFound);

  return (
    <div className="page">
      <Helmet>
        <title>Six cities. Favorites.</title>
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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesIsLoading && <Spinner />}
          {(favoritesIsNotFound || !favoriteCards.length) ? (
            <FavoritesEmptyPage />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteCardList offerList={favoriteCards} />
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavotitesPage;
