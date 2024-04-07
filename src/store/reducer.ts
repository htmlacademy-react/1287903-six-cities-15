import { createReducer } from '@reduxjs/toolkit';
import { setCityActive, getOffers, setChangeMap, getSortType, setSortedOffers } from './action';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY, defaultLocation, SortType } from '../const';
import { getSortedOffers } from '../components/sort/utils';

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
  city: defaultLocation,
  sortType: SortType.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })

    .addCase(getOffers, (state) => {
      state.offers = offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    })

    .addCase(setChangeMap, (state, action) => {
      state.city = action.payload;
    })

    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })

    .addCase(setSortedOffers, (state) => {
      state.offers = getSortedOffers(state.sortType, state.offers);
    });
});

export { reducer };
