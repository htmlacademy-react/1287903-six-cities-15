import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type NearPlaceCardProps = {
    offerCard: Offer;
}

function NearPlaceCard({ offerCard }: NearPlaceCardProps): JSX.Element {
  return (
    <PlaceCard placeType={'near-places'} offerCard={offerCard} />
  );
}

export default NearPlaceCard;
