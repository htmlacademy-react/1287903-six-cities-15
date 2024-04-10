import { createReducer } from '@reduxjs/toolkit';
import { setCityActive, getOffers, setChangeMap, getSortType, setSortedOffers, loadOffers, requireAuthorization, setError } from './action';
import { DEFAULT_CITY, defaultLocation, SortType } from '../const';
import { getSortedOffers } from '../components/sort/utils';
import { AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';
import { CityMap } from '../types/city-map';

type InitalState = {
  cityActive: string;
  allOffers: Offers;
  offers: Offers;
  offersIsLoading: boolean;
  city: CityMap;
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: InitalState = {
  cityActive: DEFAULT_CITY,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  city: defaultLocation,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })

    .addCase(getOffers, (state) => {
      if (state.allOffers.length) {
        const offersByCity = state.allOffers.filter(
          (item) => item?.city?.name === state.cityActive
        );
        state.offers = getSortedOffers(state.sortType, offersByCity);
      }
    })

    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    })

    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setSortedOffers, (state) => {
      state.offers = getSortedOffers(state.sortType, state.offers);
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
