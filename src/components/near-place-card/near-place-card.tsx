import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import { FavoritesUpdate } from '../../const';

type NearPlaceCardProps = {
    offerCard: Offer;
}

function NearPlaceCard({ offerCard }: NearPlaceCardProps): JSX.Element {
  return (
    <PlaceCard placeType={'near-places'} favoritesUpdate={FavoritesUpdate.NearOffers} offerCard={offerCard} />
  );
}

export default NearPlaceCard;
