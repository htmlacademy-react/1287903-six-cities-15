import { offer, setFavoriteOffer } from './offer-process.slice';
import { OfferProcess } from '../../types/state';
import { makeFakeOffer } from '../../utils/mocks';
import { fetchOfferAction } from '../api-actions';

const initialState: OfferProcess = {
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false,
};

let state: OfferProcess;

describe('Slice offer-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferProcess = { ...initialState };

    const result = offer.reducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferProcess = { ...initialState };

    const result = offer.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change offer with setFavoriteOffer action', () => {
    const fakeFavoriteOffer = makeFakeOffer();
    const actualState: OfferProcess = { ...initialState, offer: fakeFavoriteOffer };
    const expectedState = { ...initialState, offer: fakeFavoriteOffer, };

    const result = offer.reducer(actualState, setFavoriteOffer(fakeFavoriteOffer.isFavorite));

    expect(result).toEqual(expectedState);
  });

  it('fetchOfferAction fulfilled', () => {
    const fakeOffer = makeFakeOffer();
    const expectedState: OfferProcess = { ...initialState, offer: fakeOffer };

    const result = offer.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: fakeOffer, });

    expect(result).toEqual(expectedState);
  });

  it('fetchOfferAction rejected', () => {
    const expectedState: OfferProcess = { ...initialState, offerIsLoading: false, offerIsNotFound: true };
    const actualState: OfferProcess = { ...initialState, offerIsLoading: true, offerIsNotFound: false };

    const result = offer.reducer(actualState, { type: fetchOfferAction.rejected.type });

    expect(result).toEqual(expectedState);
  });
});
