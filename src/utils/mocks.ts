import { commerce, datatype, image, internet, lorem, date } from 'faker';
import { Offer, Offers } from '../types/offers';
import { Location } from '../types/location';
import { City } from '../types/city';
import { Host } from '../types/host';
import { Review, Reviews } from '../types/reviews';
import { User, UserLogIn } from '../types/user';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { Comments } from '../types/comments';
import { DEFAULT_CITY, DEFAULT_LOCATION, DEFAULT_SORT, AuthorizationStatus, RequestStatus } from '../const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const makeFakeLocation = (): Location => ({
  zoom: datatype.number({ min: 5, max: 15 }),
  latitude: datatype.number({ min: 5, max: 6, precision: 0.0001 }),
  longitude: datatype.number({ min: 4, max: 10, precision: 0.001 }),
});

const makeFakeCity = (): City => ({
  name: 'fakeCity',
  location: makeFakeLocation(),
});

const makeFakeHost = (): Host => ({
  hostName: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.word(10),
  type: commerce.product(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  bedrooms: datatype.number({ min: 1, max: 10 }),
  maxAdults: datatype.number({ min: 1, max: 5 }),
  isPremium: datatype.boolean(),
  isFavorite: datatype.boolean(),
  description: commerce.productDescription(),
  previewImage: image.imageUrl(260, 200, 'cat', true),
  images: Array.from({ length: 2 }, () => image.imageUrl(260, 200, 'cat', true)),
  location: makeFakeLocation(),
  city: makeFakeCity(),
  host: makeFakeHost(),
  goods: [commerce.product()],
});

const makeFakeOffers = (): Offers => Array.from({ length: 12 }, makeFakeOffer);

const makeFakeNearOffers = (): Offers => Array.from({ length: 3 }, makeFakeOffer);

const makeFakeUser = (): User => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

const makeFakeUserData = (): UserLogIn => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  token: datatype.string(),
  id: datatype.number(),
});

const makeFakeReview = (): Review => ({
  id: datatype.string(),
  user: makeFakeUser(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

const makeFakeReviews = (): Reviews => Array.from({ length: 5 }, makeFakeReview);

const makeFakeCommentData = (): Comments => ({
  id: datatype.string(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
});

const makeFakeStore = (initialState?: Partial<State>): State => ({
  OFFERS: {
    cityActive: DEFAULT_CITY,
    city: DEFAULT_LOCATION,
    sortType: DEFAULT_SORT,
    allOffers: [],
    offers: [],
    offersIsLoading: false,
    offersIsNotFound: false
  },
  OFFER: {
    offer: null,
    offerIsLoading: false,
    offerIsNotFound: false
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null
  },
  REVIEWS: {
    reviews: [],
    reviewsIsLoading: false,
    reviewsIsNotFound: true,
    reviewRequestStatus: RequestStatus.Idle,
  },
  NEAROFFERS: {
    nearOffers: [],
    nearOffersIsLoading: false,
    nearOffersIsNotFound: false,
  },
  ERROR: {
    errorMessage: null
  },
  FAVORITES: {
    favorites: [],
    favoritesIsLoading: false,
    favoritesIsNotFound: false
  },
  ...initialState ?? {},
});

export {
  makeFakeLocation, makeFakeCity, makeFakeOffer, makeFakeOffers,
  makeFakeNearOffers, makeFakeReview, makeFakeReviews, makeFakeUserData,
  extractActionsTypes, makeFakeCommentData, makeFakeStore
};
