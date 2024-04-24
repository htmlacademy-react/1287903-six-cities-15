import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { makeFakeUserData } from '../../utils/mocks';
import { getAuthCheckedStatus, getAuthorizationStatus } from './user-process.selectors';

const fakeUser = makeFakeUserData();

const fakeState: UserProcess = {
  user: fakeUser,
  authorizationStatus: AuthorizationStatus.Auth,
};

let state = { [NameSpace.User]: fakeState };

describe('UserProcess selectors', () => {
  beforeEach(() => {
    state = { [NameSpace.User]: { ...fakeState } };
  });

  it('should return authorization status from state', () => {
    const result = getAuthorizationStatus(state);

    expect(result).toEqual(AuthorizationStatus.Auth);
  });

  it('should return "true" because auth status is "Auth"', () => {
    const result = getAuthorizationStatus(state);

    expect(result).toEqual(AuthorizationStatus.Auth);
  });

  it('should return "true"', () => {
    const result = getAuthCheckedStatus(state);

    expect(result).toEqual(true);
  });
});
