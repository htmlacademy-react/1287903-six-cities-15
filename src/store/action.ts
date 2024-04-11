import { createAction } from '@reduxjs/toolkit';
import { CityMap } from '../types/city-map';
import { SortType } from '../const';
import { Offers } from '../types/offers';
import { AppRoute, AuthorizationStatus, NameSpace } from '../const';
import { UserLogIn } from '../types/user';

export const setCityActive = createAction('main/setCityActive', (value: string) => ({ payload: value }));
export const getOffers = createAction('main/getOffers');
export const setChangeMap = createAction('map/setChangeMap', (value: CityMap) => ({ payload: value }));
export const getSortType = createAction('main/getSortType', (value: SortType) => ({ payload: value }));
export const setSortedOffers = createAction('setSortedOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setOffersIsLoading = createAction<boolean>('setOffersIsLoading');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
export const setUser = createAction<UserLogIn | null>(`${NameSpace.User}/setUser`);
