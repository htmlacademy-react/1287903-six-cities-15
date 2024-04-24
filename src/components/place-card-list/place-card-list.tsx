import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offers';
import { FavoritesUpdate } from '../../const';

type PlaceCardListProps = {
    offerList: Offers;
    setCardHoverId(id: string | null): void;
}

function PlaceCardList({ offerList, setCardHoverId }: PlaceCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerList.map((offer) => {
        const keyValue = offer.id;
        return (
          <PlaceCard placeType={'cities'} favoritesUpdate={FavoritesUpdate.Offers} key={keyValue} offerCard={offer} setCardHoverId={setCardHoverId} />
        );
      })}
    </div>
  );
}

export default PlaceCardList;
