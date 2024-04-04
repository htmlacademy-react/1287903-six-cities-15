import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import Logo from '../../components/logo/logo';
import ReviewCardList from '../../components/review-card-list/review-card-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import { gerNearOffers } from './utils';
import NearPlaceCardList from '../../components/near-place-card-list/near-place-card-list';
import NotFoundPage from '../not-found-page/not-found-page';

type OfferPageProps = {
  offers: Offers;
  reviews: Reviews;
};

function OfferPage({ offers, reviews }: OfferPageProps): JSX.Element {
  const cityMapActive = useAppSelector((state) => state.city);
  const params = useParams();
  const cardId = params.id;
  const selectedCard = offers.filter((offer) => offer.id === cardId)[0];
  const { title, type, images, isPremium, rating, bedrooms, maxAdults, price, isFavorite, host, goods, description } = selectedCard;
  const { hostName, isPro, avatarUrl } = host;

  const foundOffer = offers.find((offer): boolean => offer.id.toString() === cardId);

  if (!foundOffer) {
    return (<NotFoundPage />);
  }

  const offerPage = { ...selectedCard, ...foundOffer };
  const nearOffers = gerNearOffers(offerPage);
  const nearOfferPlusSelectedCard = [offerPage, ...nearOffers];

  return (
    <div className="page">
      <Helmet>
        <title>Six cities. Offer.</title>
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
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((url, id) => {
                const keyValue = `${id}-${url}`;
                return (
                  <div key={keyValue} className="offer__image-wrapper">
                    <img className="offer__image" src={url} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
                : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className={`offer__bookmark-icon ${isFavorite ? 'offer__bookmark-button--active' : ''}`} width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">Whats inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => {
                    const keyValue = good;
                    return (<li key={keyValue} className="offer__inside-item">{good}</li>);
                  })}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{hostName}</span>
                  <span className="offer__user-status">{isPro ? 'Pro' : ''}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewCardList reviewList={reviews} />
              <ReviewForm />
            </div>
          </div>
          <Map mapType={'offer'} offers={nearOfferPlusSelectedCard} cardHoverId={offerPage.id} city={cityMapActive} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <NearPlaceCardList offerList={nearOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
