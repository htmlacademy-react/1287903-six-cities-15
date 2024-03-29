import NearPlaceCard from '../near-place-card/near-place-card';
import { Offers } from '../../types/offers';

type NearPlaceCardListProps = {
    offerList: Offers;
}

function NearPlaceCardList({ offerList}: NearPlaceCardListProps): JSX.Element {

  return (
    < >
      {offerList.map((offer) => {
        const keyValue = offer.id;
        return (
          <NearPlaceCard key={keyValue} offerCard={offer} />
        );
      })}
    </>
  );
}

export default NearPlaceCardList;
