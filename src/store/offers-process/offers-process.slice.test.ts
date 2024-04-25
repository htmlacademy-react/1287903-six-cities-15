import { offers } from './offers-process.slice';
import { OffersProcess } from '../../types/state';
import { DEFAULT_CITY, DEFAULT_LOCATION, DEFAULT_SORT } from '../../const';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  city: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

describe('Slice offers-process', () => {

  it('should return initial state with empty action ', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    const result = offers.reducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    const result = offers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
