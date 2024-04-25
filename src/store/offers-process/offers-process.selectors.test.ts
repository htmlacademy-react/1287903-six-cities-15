import { address } from 'faker/locale/en';
import { makeFakeOffers, makeFakeCity } from '../../utils/mocks';
import { CityName, SortName } from '../../const';
import { NameSpace } from '../../const';
import { OffersProcess } from '../../types/state';
import {
  getCityActive, getOffers, getCity, getSortType,
  getOffersIsLoading, getOffersIsNotFound
} from './offers-process.selectors';

const fakeOffers = makeFakeOffers();
const fakeLocation = makeFakeCity();
const fakeCity = address.cityName() as CityName;
const fakeSortType = address.cityName() as SortName;

const fakeState: OffersProcess = {
  cityActive: fakeCity,
  city: fakeLocation,
  sortType: fakeSortType,
  allOffers: fakeOffers,
  offers: fakeOffers,
  offersIsLoading: true,
  offersIsNotFound: false,
};

let state = { [NameSpace.Offers]: fakeState };

describe('OffersProcess selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.Offers]: { ...fakeState } };
  });

  it('should return "offers" from state', () => {
    const result = getOffers(state);

    expect(result).toEqual(fakeOffers);
  });

  it('should return true offersIsLoading status', () => {
    const result = getOffersIsLoading(state);

    expect(result).toEqual(true);
  });

  it('should return false offersIsNotFound status', () => {
    const result = getOffersIsNotFound(state);

    expect(result).toEqual(false);
  });

  it('should return "city" from state', () => {
    const result = getCity(state);

    expect(result).toEqual(fakeLocation);
  });

  it('should return "cityActive" from state', () => {
    const result = getCityActive(state);

    expect(result).toEqual(fakeCity);
  });

  it('should return "sortType" from state', () => {
    const result = getSortType(state);

    expect(result).toEqual(fakeSortType);
  });
});
