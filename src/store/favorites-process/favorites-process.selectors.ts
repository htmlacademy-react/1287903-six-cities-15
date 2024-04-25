import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offers';

export const getFavorites = (state: Pick<State, NameSpace.Favorites>): Offers =>
  state[NameSpace.Favorites].favorites;
export const getFavoritesIsLoading = (state: Pick<State, NameSpace.Favorites>): boolean =>
  state[NameSpace.Favorites].favoritesIsLoading;
export const getFavoritesIsNotFound = (state: Pick<State, NameSpace.Favorites>): boolean =>
  state[NameSpace.Favorites].favoritesIsNotFound;
