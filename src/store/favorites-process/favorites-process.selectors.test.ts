import { makeFakeOffers } from '../../utils/mocks';
import { NameSpace } from '../../const';
import { FavoritesProcess } from '../../types/state';
import { getFavorites, getFavoritesIsLoading, getFavoritesIsNotFound } from './favorites-process.selectors';

const fakeOffer = makeFakeOffers();

const fakeState: FavoritesProcess = {
  favorites: fakeOffer,
  favoritesIsLoading: true,
  favoritesIsNotFound: false,
};

let state = { [NameSpace.Favorites]: fakeState };

describe('Favorites selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Favorites]: { ...fakeState } };
  });

  it('should return "favorites" from state', () => {
    const result = getFavorites(state);

    expect(result).toEqual(fakeOffer);
  });

  it('should return true favoritesIsLoading status', () => {
    const result = getFavoritesIsLoading(state);

    expect(result).toEqual(true);
  });

  it('should return false favoritesIsNotFound status', () => {
    const result = getFavoritesIsNotFound(state);

    expect(result).toEqual(false);
  });

});
