import { fetchFavoritesAction } from '../../store/api-actions';
import { makeFakeOffers } from '../../utils/mocks';
import { FavoritesProcess } from '../../types/state';
import { favorites } from './favorites-process.slice';

const initialState: FavoritesProcess = {
  favorites: [],
  favoritesIsLoading: false,
  favoritesIsNotFound: false
};

let state: FavoritesProcess;

describe('Slice favorites-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoritesProcess = { ...initialState };

    const result = favorites.reducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoritesProcess = { ...initialState };

    const result = favorites.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('fetchFavoritesAction fulfilled', () => {
    const fakeFavoritesOffers = makeFakeOffers();
    const expectedState: FavoritesProcess = { ...initialState, favorites: fakeFavoritesOffers };

    const result = favorites.reducer(state, { type: fetchFavoritesAction.fulfilled.type, payload: fakeFavoritesOffers, });

    expect(result).toEqual(expectedState);
  });

  it('fetchFavoritesAction rejected', () => {
    const expectedState: FavoritesProcess = { ...initialState, favoritesIsLoading: false, favoritesIsNotFound: true };
    const actualState: FavoritesProcess = { ...initialState, favoritesIsLoading: true, favoritesIsNotFound: false };

    const result = favorites.reducer(actualState, { type: fetchFavoritesAction.rejected.type });

    expect(result).toEqual(expectedState);
  });

});
