import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';

export const getNearOffers = (state: Pick<State, NameSpace.NearOffers>): Offers =>
  state[NameSpace.NearOffers].nearOffers;

export const getNearOffersIsLoading = (state: Pick<State, NameSpace.NearOffers>): boolean =>
  state[NameSpace.NearOffers].nearOffersIsLoading;

export const getNearOffersIsNotFound = (state: Pick<State, NameSpace.NearOffers>): boolean =>
  state[NameSpace.NearOffers].nearOffersIsNotFound;
