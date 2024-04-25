import { makeFakeOffer } from '../../utils/mocks';
import { NameSpace } from '../../const';
import { OfferProcess } from '../../types/state';
import { getOffer, getOfferIsLoading, getOfferIsNotFound } from './offer-process.selectors';

const fakeOffer = makeFakeOffer();

const fakeState: OfferProcess = {
  offer: fakeOffer,
  offerIsLoading: true,
  offerIsNotFound: false,
};

let state = { [NameSpace.Offer]: fakeState };

describe('OfferProcess selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Offer]: { ...fakeState } };
  });

  it('should return "offer" from state', () => {
    const result = getOffer(state);

    expect(result).toEqual(fakeOffer);
  });

  it('should return true offerIsLoading status', () => {
    const result = getOfferIsLoading(state);

    expect(result).toEqual(true);
  });

  it('should return false offerIsNotFound status', () => {
    const result = getOfferIsNotFound(state);

    expect(result).toEqual(false);
  });

});
