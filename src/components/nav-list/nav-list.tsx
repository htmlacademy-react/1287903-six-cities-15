import { NavLink, Link} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { AuthorizationStatus, AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUser } from '../../store/user-process/user-process.selectors';
import { getFavorites } from '../../store/favorites-process/favorites-process.selectors';
import { setAuthorizationStatusByDefault } from '../../store/user-process/user-process.slice';

function NavList(): JSX.Element {
  const authorizationStatusLogged = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const isLogged = authorizationStatusLogged === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const favoritesLength = useAppSelector(getFavorites).length;

  const handleClick = () => {
    dispatch(logoutAction());
    dispatch(setAuthorizationStatusByDefault());
  };

  return (
    <nav className="header__nav">
      {isLogged ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <NavLink
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {user?.email}
              </span>
              <span className="header__favorite-count">{favoritesLength}</span>
            </NavLink>
          </li>
          <li className="header__nav-link resetStyleButton">
            <button
              className="header__nav-link"
              onClick={handleClick}
            >
              <span className="header__signout">Sign out</span>
            </button>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavList;
