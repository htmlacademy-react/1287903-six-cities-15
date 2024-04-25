import { nearOffers, setFavoriteNearOffers } from './near-offers-process.slice';
import { NearOffersProcess } from '../../types/state';
import { fetchNearOffersAction } from '../api-actions';
import { makeFakeNearOffers, makeFakeOffer } from '../../utils/mocks';

const initialState: NearOffersProcess = {
  nearOffers: [],
  nearOffersIsLoading: false,
  nearOffersIsNotFound: false
};

let state: NearOffersProcess;

describe('Slice near-offers-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: NearOffersProcess = { ...initialState };

    const result = nearOffers.reducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: NearOffersProcess = { ...initialState };

    const result = nearOffers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change offer with setFavoriteNearOffers action', () => {
    const fakeNearOffers = makeFakeNearOffers();
    const fakeNearFavoriteOffers = makeFakeOffer();
    const actualState: NearOffersProcess = { ...initialState, nearOffers: fakeNearOffers };

    let expectedFakeNearOffers = [...fakeNearOffers];
    expectedFakeNearOffers = expectedFakeNearOffers.
      map((item) => item.id === fakeNearFavoriteOffers.id ? fakeNearFavoriteOffers : item);

    const expectedState = { ...initialState, nearOffers: expectedFakeNearOffers, };

    const result = nearOffers.reducer(actualState, setFavoriteNearOffers(fakeNearFavoriteOffers));

    expect(result).toEqual(expectedState);
  });

  it('fetchNearOffersAction fulfilled', () => {
    const fakeNearOffers = makeFakeNearOffers();
    const expectedState: NearOffersProcess = { ...initialState, nearOffers: fakeNearOffers };

    const result = nearOffers.reducer(state, { type: fetchNearOffersAction.fulfilled.type, payload: fakeNearOffers, });

    expect(result).toEqual(expectedState);
  });

  it('fetchNearOffersAction rejected', () => {
    const expectedState: NearOffersProcess = { ...initialState, nearOffersIsLoading: false, nearOffersIsNotFound: true };
    const actualState: NearOffersProcess = { ...initialState, nearOffersIsLoading: true, nearOffersIsNotFound: false };

    const result = nearOffers.reducer(actualState, { type: fetchNearOffersAction.rejected.type });

    expect(result).toEqual(expectedState);
  });
});
