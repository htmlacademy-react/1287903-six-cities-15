import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../utils/mocks';
import { UserProcess } from '../../types/state';
import { user } from './user-process.slice';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

let state: UserProcess;

describe('Slice user-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: UserProcess = { ...initialState };

    const result = user.reducer(initialState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: UserProcess = { ...initialState };

    const result = user.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('checkAuthAction fulfilled ', () => {
    const fakeUser = makeFakeUserData();
    const expectedState: UserProcess = { ...initialState, authorizationStatus: AuthorizationStatus.Auth, user: fakeUser, };

    const result = user.reducer(state, { type: checkAuthAction.fulfilled.type, payload: fakeUser, });

    expect(result).toEqual(expectedState);
  });

  it('checkAuthAction rejected', () => {
    const expectedState: UserProcess = { ...initialState, authorizationStatus: AuthorizationStatus.NoAuth, };

    const result = user.reducer(state, { type: checkAuthAction.rejected, });

    expect(result).toEqual(expectedState);
  });
});

it('loginAction fulfilled', () => {
  const fakeUser = makeFakeUserData();
  const expectedState: UserProcess = { ...initialState, authorizationStatus: AuthorizationStatus.Auth, user: fakeUser, };

  const result = user.reducer(state, { type: loginAction.fulfilled.type, payload: fakeUser, });

  expect(result).toEqual(expectedState);
});

it('loginAction rejected', () => {
  const expectedState: UserProcess = { ...initialState, authorizationStatus: AuthorizationStatus.NoAuth, };

  const result = user.reducer(state, { type: loginAction.rejected, });

  expect(result).toEqual(expectedState);
});


it('logoutAction fulfilled', () => {
  const expectedState: UserProcess = { ...initialState, authorizationStatus: AuthorizationStatus.NoAuth, };

  const result = user.reducer(state, { type: logoutAction.fulfilled.type, });

  expect(result).toEqual(expectedState);
});
