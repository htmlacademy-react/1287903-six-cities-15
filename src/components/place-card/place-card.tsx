import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { handleStars } from '../../const';
import { useFavorites } from '../../hooks/use-favorites';
import { FavoritesUpdate } from '../../const';

type PlaceCardProps = {
  placeType: 'cities' | 'near-places';
  offerCard: Offer;
  setCardHoverId?(id: string | null): void;
  favoritesUpdate: FavoritesUpdate;
}

function PlaceCard({ favoritesUpdate, placeType, offerCard, setCardHoverId }: PlaceCardProps): JSX.Element {

  const handleMouseOver = () => {
    setCardHoverId?.(offerCard.id);
  };

  const handleMouseOut = () => {
    setCardHoverId?.(null);
  };

  const currentStatus = offerCard.isFavorite ? 0 : 1;

  const onChangeFavorites = useFavorites(
    String(offerCard.id),
    currentStatus,
    favoritesUpdate
  );

  return (
    <article
      className={`${placeType}__card place-card`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {offerCard.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${placeType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offerCard.id}`}>
          <img
            className="place-card__image"
            src={offerCard.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerCard.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={onChangeFavorites}
            className={`place-card__bookmark-button ${offerCard.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${handleStars(offerCard.rating)}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offerCard.id}`}>
            {offerCard.title}
          </Link>
        </h2>
        <p className="place-card__type">{offerCard.type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
