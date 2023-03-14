import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
