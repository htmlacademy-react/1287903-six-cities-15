import { offers } from '../../mocks/offers';
import { Offer } from '../../types/offers';

const MAX_NEAR_FFERS = 3;

export const gerNearOffers = (offer: Offer): Offer[] => {
  const nearOffers: Offer[] = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_FFERS) {
      break;
    }
  }
  return nearOffers;
};
